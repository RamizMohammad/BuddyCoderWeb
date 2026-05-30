import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock3,
  Command,
  Download,
  Edit2,
  FileCode,
  FolderOpen,
  Keyboard,
  LogIn,
  Play,
  RotateCcw,
  Search,
  Save,
  Square,
  Trash2,
  Wifi,
  WifiOff,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CodeEditor } from "@/components/buddycode/CodeEditor";
import { LANGUAGES, type Language } from "@/components/buddycode/languages";
import { LanguageSelector } from "@/components/buddycode/LanguageSelector";
import { OutputPanel } from "@/components/buddycode/OutputPanel";
import { API_BASE, useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { toast } from "sonner";
import { LogoMark } from "@/components/buddycode/LogoMark";

export const Route = createFileRoute("/editor")({
  head: () => ({
    meta: [
      { title: "Editor — BuddyCode Online IDE" },
      {
        name: "description",
        content:
          "BuddyCode online editor — write, compile and run Python, JavaScript, Java, C and C++ instantly.",
      },
    ],
  }),
  component: EditorPage,
});

interface FileItem {
  _id: string;
  filename: string;
  uploadedAt?: string;
  stored_name?: string;
}

function EditorPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const [code, setCode] = useState<string>(LANGUAGES[0].defaultCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [lastRunMs, setLastRunMs] = useState<number | null>(null);
  const [fileSearch, setFileSearch] = useState("");
  const [files, setFiles] = useState<FileItem[]>([]);
  const [filesLoading, setFilesLoading] = useState(false);
  const [filesError, setFilesError] = useState("");
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [editingFileName, setEditingFileName] = useState("");
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  /* ============================================================
     ⚠️  ALL business logic below is preserved EXACTLY from the
     original BuddyCode app — API endpoints, payloads, auth flow,
     error handling, and routing decisions are unchanged.
     ============================================================ */

  useEffect(() => {
    checkBackendConnection();
    const interval = setInterval(checkBackendConnection, 15000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isAuthenticated && isSidePanelOpen) fetchFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isSidePanelOpen]);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch(`${API_BASE}/health`);
      setIsConnected(response.ok);
    } catch (err) {
      console.error("[health check failed]", err);
      setIsConnected(false);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setCode(language.defaultCode);
    setOutput("");
    setError("");
  };

  const runCode = async () => {
    if (!isConnected) {
      setError("Backend server is not running.");
      return;
    }
    setIsRunning(true);
    const startedAt = performance.now();
    setOutput("");
    setError("");
    try {
      const response = await fetch(`${API_BASE}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: selectedLanguage.value, code }),
      });
      const result = await response.json();
      if (result.error) {
        setError(result.error);
      } else {
        const stdout = result.output || "";
        const stderr = result.stderr || "";
        if (stderr && !stdout) setError(stderr);
        else if (stdout) setOutput(stdout);
        else setOutput("Code executed successfully with no output");
        if (result.exit_code !== "0" && result.exit_code !== null && !stderr) {
          setError(`Process exited with code ${result.exit_code}`);
        }
      }
    } catch {
      setError("Failed to connect to backend server.");
      setIsConnected(false);
    } finally {
      setLastRunMs(Math.round(performance.now() - startedAt));
      setIsRunning(false);
    }
  };

  const clearOutput = () => { setOutput(""); setError(""); };

  const fetchFiles = async () => {
    setFilesLoading(true);
    setFilesError("");
    try {
      const response = await fetch(`${API_BASE}/files`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch files");
      const data = await response.json();
      setFiles(data.files || []);
    } catch (err) {
      setFilesError(err instanceof Error ? err.message : "Failed to load files");
    } finally {
      setFilesLoading(false);
    }
  };

  const handleDownload = async (fileId: string, filename: string) => {
    if (!fileId) { setFilesError("Invalid file ID"); return; }
    try {
      const response = await fetch(`${API_BASE}/download/${fileId}`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      if (!response.ok) throw new Error("Failed to download file");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setFilesError(err instanceof Error ? err.message : "Failed to download file");
    }
  };

  const handleRenameFile = async (fileId: string) => {
    if (!editingFileName.trim()) { setFilesError("Filename cannot be empty"); return; }
    try {
      const response = await fetch(`${API_BASE}/files/${fileId}/rename`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${user?.token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ filename: editingFileName }),
      });
      if (!response.ok) throw new Error("Failed to rename file");
      setEditingFileId(null);
      setEditingFileName("");
      fetchFiles();
    } catch (err) {
      setFilesError(err instanceof Error ? err.message : "Failed to rename file");
    }
  };

  const saveFile = async () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to save files", { description: "Redirecting to login…" });
      setTimeout(() => navigate({ to: "/login" }), 1500);
      return;
    }
    setIsSaving(true);
    try {
      const filename = `code${selectedLanguage.extension}`;
      const blob = new Blob([code], { type: "text/plain" });
      const formData = new FormData();
      formData.append("file", blob, filename);
      const response = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${user?.token}` },
        body: formData,
      });
      if (!response.ok) throw new Error("Failed to save file");
      toast.success("File saved", { description: `Saved as ${filename}` });
      if (isSidePanelOpen) fetchFiles();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save file");
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  const filteredFiles = files.filter((file) =>
    file.filename.toLowerCase().includes(fileSearch.toLowerCase().trim()),
  );

  // Keyboard shortcuts: Ctrl/Cmd+Enter to run, Ctrl/Cmd+S to save, Ctrl/Cmd+K for commands
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const meta = e.ctrlKey || e.metaKey;
      if (meta && e.key === "Enter") { e.preventDefault(); runCode(); }
      if (meta && e.key.toLowerCase() === "s") { e.preventDefault(); saveFile(); }
      if (meta && e.key.toLowerCase() === "k") { e.preventDefault(); setIsCommandOpen((open) => !open); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, selectedLanguage, isConnected, isAuthenticated]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background text-foreground">
      {/* TOP BAR */}
      <header className="relative z-30 border-b border-border bg-surface/90 backdrop-blur">
        <div className="flex h-14 items-center gap-2 px-2 sm:gap-3 sm:px-4">
          <Link
            to="/"
            className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-accent/10 hover:text-foreground"
            aria-label="Back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <div className="flex items-center gap-2">
            <LogoMark className="h-8 w-8 rounded-md" />
            <span className="hidden text-sm font-semibold sm:inline">
              Buddy<span className="text-gradient-brand">Code</span>
            </span>
          </div>

          <div className="mx-1 hidden h-5 w-px bg-border sm:block" />

          <div className="min-w-0 flex-1">
            <div className="hidden sm:block">
              <LanguageSelector
                languages={LANGUAGES}
                selected={selectedLanguage}
                onChange={handleLanguageChange}
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCommandOpen(true)}
              className="hidden gap-2 border border-border bg-card/40 font-mono text-xs text-muted-foreground lg:inline-flex"
            >
              <Command className="h-3.5 w-3.5" />
              Actions
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px]">⌘K</kbd>
            </Button>

            <span
              className={`hidden items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-medium lg:inline-flex ${
                isConnected
                  ? "border-success/30 bg-success/10 text-success"
                  : "border-destructive/30 bg-destructive/10 text-destructive"
              }`}
            >
              {isConnected ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
              {isConnected ? "Connected" : "Offline"}
            </span>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidePanelOpen((o) => !o)}
              title="My Files"
              aria-label="My Files"
            >
              <FolderOpen className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm" onClick={saveFile} disabled={isSaving}>
              <Save className="h-4 w-4" />
              <span className="hidden md:inline">{isSaving ? "Saving…" : "Save"}</span>
            </Button>

            <Button
              size="sm"
              onClick={runCode}
              disabled={isRunning || !isConnected}
              className="bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90"
            >
              {isRunning ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              <span className="hidden sm:inline">{isRunning ? "Running" : "Run"}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={clearOutput}
              title="Clear output"
              aria-label="Clear output"
              className="hidden sm:inline-flex"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile language selector */}
        <div className="border-t border-border px-3 py-2 sm:hidden">
          <LanguageSelector
            languages={LANGUAGES}
            selected={selectedLanguage}
            onChange={handleLanguageChange}
          />
        </div>
      </header>

      {/* MAIN */}
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="hidden min-h-0 flex-1 md:block">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={64} minSize={42}>
              <CodeEditor language={selectedLanguage} code={code} onChange={setCode} />
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-border/80" />
            <ResizablePanel defaultSize={36} minSize={24}>
              <OutputPanel
                output={output}
                error={error}
                isRunning={isRunning}
                onClear={clearOutput}
                language={selectedLanguage.label}
                runTimeMs={lastRunMs}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <div className="flex min-h-0 flex-1 flex-col md:hidden">
          <div className="min-h-0 flex-1">
            <CodeEditor language={selectedLanguage} code={code} onChange={setCode} />
          </div>
          <div className="h-72 border-t border-border">
            <OutputPanel
              output={output}
              error={error}
              isRunning={isRunning}
              onClear={clearOutput}
              language={selectedLanguage.label}
              runTimeMs={lastRunMs}
            />
          </div>
        </div>

        <div className="flex h-8 items-center justify-between border-t border-border bg-surface px-3 font-mono text-[11px] text-muted-foreground">
          <div className="flex min-w-0 items-center gap-3">
            <span className="truncate">{selectedLanguage.label} {selectedLanguage.extension}</span>
            <span className="hidden sm:inline">{code.split("\n").length} lines</span>
            <span className="hidden sm:inline">{code.length} chars</span>
          </div>
          <div className="flex items-center gap-3">
            {lastRunMs !== null && (
              <span className="hidden items-center gap-1 sm:inline-flex">
                <Clock3 className="h-3 w-3" />
                {lastRunMs}ms
              </span>
            )}
            <span className={isConnected ? "text-success" : "text-destructive"}>
              {isConnected ? "Backend online" : "Backend offline"}
            </span>
          </div>
        </div>

        <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
          <CommandInput placeholder="Run, save, switch language..." />
          <CommandList>
            <CommandEmpty>No action found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => { setIsCommandOpen(false); runCode(); }} disabled={isRunning || !isConnected}>
                <Play className="h-4 w-4" /> Run code
                <CommandShortcut>⌘↵</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => { setIsCommandOpen(false); saveFile(); }}>
                <Save className="h-4 w-4" /> Save file
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => { setIsCommandOpen(false); clearOutput(); }}>
                <Trash2 className="h-4 w-4" /> Clear console
              </CommandItem>
              <CommandItem onSelect={() => { setIsCommandOpen(false); setIsSidePanelOpen(true); }}>
                <FolderOpen className="h-4 w-4" /> Open files
              </CommandItem>
              <CommandItem onSelect={() => { setIsCommandOpen(false); handleLanguageChange(selectedLanguage); }}>
                <RotateCcw className="h-4 w-4" /> Reset starter code
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Languages">
              {LANGUAGES.map((language) => (
                <CommandItem
                  key={language.value}
                  onSelect={() => {
                    handleLanguageChange(language);
                    setIsCommandOpen(false);
                  }}
                >
                  <span className="text-base">{language.emoji}</span>
                  {language.label}
                  <CommandShortcut>{language.extension}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Shortcuts">
              <CommandItem>
                <Keyboard className="h-4 w-4" /> Command palette
                <CommandShortcut>⌘K</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        {/* FILES PANEL */}
        <AnimatePresence>
          {isSidePanelOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidePanelOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 26, stiffness: 220 }}
                className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-sm flex-col border-l border-border bg-card shadow-2xl"
              >
                <div className="border-b border-border px-4 py-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="h-4 w-4 text-primary" />
                      <h2 className="text-sm font-semibold">My Files</h2>
                      {isAuthenticated && (
                        <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                          {files.length}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setIsSidePanelOpen(false)}
                      aria-label="Close panel"
                      className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  {isAuthenticated && (
                    <div className="relative mt-3">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        value={fileSearch}
                        onChange={(e) => setFileSearch(e.target.value)}
                        placeholder="Search files"
                        className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {!isAuthenticated ? (
                    <div className="grid h-full place-items-center text-center">
                      <div className="max-w-xs">
                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                          <LogIn className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold">Sign in to access files</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Save snippets, rename them and download anytime.
                        </p>
                        <Button asChild className="mt-5 w-full">
                          <Link to="/login">Sign in <ChevronRight className="h-4 w-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  ) : filesLoading ? (
                    <div className="space-y-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-16 animate-pulse rounded-lg bg-muted/50" />
                      ))}
                    </div>
                  ) : filesError ? (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {filesError}
                    </div>
                  ) : files.length === 0 ? (
                    <div className="grid h-full place-items-center text-center">
                      <div>
                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-muted text-muted-foreground">
                          <FileCode className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold">No files yet</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Write some code and hit Save to see it here.
                        </p>
                      </div>
                    </div>
                  ) : filteredFiles.length === 0 ? (
                    <div className="grid h-full place-items-center text-center">
                      <div>
                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-muted text-muted-foreground">
                          <Search className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold">No matching files</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Try a different name or extension.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {filteredFiles.map((file) => (
                        <motion.li
                          key={file._id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="group rounded-lg border border-border bg-card/60 p-3 transition hover:border-primary/40 hover:bg-card"
                        >
                          <div className="flex items-start gap-3">
                            <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                              <FileCode className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              {editingFileId === file._id ? (
                                <input
                                  type="text"
                                  value={editingFileName}
                                  onChange={(e) => setEditingFileName(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") handleRenameFile(file._id);
                                    if (e.key === "Escape") { setEditingFileId(null); setEditingFileName(""); }
                                  }}
                                  className="w-full rounded-md border border-primary bg-background px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                                  autoFocus
                                />
                              ) : (
                                <p className="truncate text-sm font-medium">{file.filename}</p>
                              )}
                              {file.uploadedAt && (
                                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                                  {formatDate(file.uploadedAt)}
                                </p>
                              )}
                            </div>
                            <div className="flex flex-shrink-0 items-center gap-1">
                              {editingFileId === file._id ? (
                                <>
                                  <button
                                    onClick={() => handleRenameFile(file._id)}
                                    className="grid h-7 w-7 place-items-center rounded-md bg-success/15 text-success hover:bg-success/25"
                                    aria-label="Confirm rename"
                                  >
                                    <Check className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={() => { setEditingFileId(null); setEditingFileName(""); }}
                                    className="grid h-7 w-7 place-items-center rounded-md bg-destructive/15 text-destructive hover:bg-destructive/25"
                                    aria-label="Cancel rename"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => { setEditingFileId(file._id); setEditingFileName(file.filename); }}
                                    className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition hover:bg-accent/10 hover:text-foreground"
                                    aria-label="Rename file"
                                    title="Rename"
                                  >
                                    <Edit2 className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDownload(file._id, file.filename)}
                                    className="grid h-7 w-7 place-items-center rounded-md text-accent transition hover:bg-accent/10"
                                    aria-label="Download file"
                                    title="Download"
                                  >
                                    <Download className="h-3.5 w-3.5" />
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
