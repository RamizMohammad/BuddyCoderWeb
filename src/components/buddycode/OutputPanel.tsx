import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock3, FileWarning, Loader2, Terminal, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  output: string;
  error: string;
  isRunning: boolean;
  onClear: () => void;
  language: string;
  runTimeMs?: number | null;
}

export function OutputPanel({ output, error, isRunning, onClear, language, runTimeMs }: Props) {
  const status = isRunning
    ? { label: "Running", color: "text-warning", dot: "bg-warning" }
    : error
    ? { label: "Failed", color: "text-destructive", dot: "bg-destructive" }
    : output
    ? { label: "Success", color: "text-success", dot: "bg-success" }
    : { label: "Idle", color: "text-muted-foreground", dot: "bg-muted-foreground/50" };

  return (
    <div className="flex h-full flex-col bg-[#0a0d14]">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Console</span>
          <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {language}
          </span>
          {runTimeMs !== null && runTimeMs !== undefined && (
            <span className="hidden items-center gap-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
              <Clock3 className="h-3 w-3" />
              {runTimeMs}ms
            </span>
          )}
        </div>
        <button
          onClick={onClear}
          className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition hover:bg-accent/10 hover:text-foreground"
          aria-label="Clear output"
          title="Clear output"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden p-3">
        <Tabs defaultValue="output" className="flex h-full min-h-0 flex-col">
          <TabsList className="grid h-9 w-full grid-cols-3 rounded-md bg-muted/60">
            <TabsTrigger value="output" className="gap-1.5 text-xs">
              <Terminal className="h-3.5 w-3.5" /> Output
            </TabsTrigger>
            <TabsTrigger value="errors" className="gap-1.5 text-xs">
              <FileWarning className="h-3.5 w-3.5" /> Errors
            </TabsTrigger>
            <TabsTrigger value="details" className="gap-1.5 text-xs">
              <Clock3 className="h-3.5 w-3.5" /> Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="output" className="mt-3 min-h-0 flex-1 overflow-auto font-mono text-sm">
            {isRunning ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-warning">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Executing {language} code...</span>
              </motion.div>
            ) : output ? (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-success">
                  <CheckCircle2 className="h-4 w-4" />
                  Execution Successful
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-success/20 bg-success/5 p-4 text-foreground/90">
                  {output}
                </pre>
              </motion.div>
            ) : (
              <EmptyConsole label="No output yet" />
            )}
          </TabsContent>

          <TabsContent value="errors" className="mt-3 min-h-0 flex-1 overflow-auto font-mono text-sm">
            {error ? (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  Execution Error
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-destructive">
                  {error}
                </pre>
              </motion.div>
            ) : (
              <EmptyConsole label="No errors detected" />
            )}
          </TabsContent>

          <TabsContent value="details" className="mt-3 min-h-0 flex-1 overflow-auto text-sm">
            <div className="grid gap-2 font-mono text-xs">
              <DetailRow label="Language" value={language} />
              <DetailRow label="Status" value={status.label} />
              <DetailRow label="Output size" value={output ? `${output.length} chars` : "0 chars"} />
              <DetailRow label="Error size" value={error ? `${error.length} chars` : "0 chars"} />
              <DetailRow label="Last runtime" value={runTimeMs !== null && runTimeMs !== undefined ? `${runTimeMs}ms` : "Not run yet"} />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex items-center justify-between border-t border-border bg-surface px-4 py-2 text-xs">
        <div className={`flex items-center gap-2 ${status.color}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot} ${isRunning ? "animate-pulse" : ""}`} />
          <span className="font-medium">{status.label}</span>
        </div>
        <span className="font-mono text-muted-foreground">
          {output ? `${output.length} chars` : error ? `${error.length} chars` : "—"}
        </span>
      </div>
    </div>
  );
}

function EmptyConsole({ label }: { label: string }) {
  return (
    <div className="grid h-full place-items-center py-12 text-center">
      <div>
        <Terminal className="mx-auto mb-4 h-10 w-10 text-muted-foreground/40" />
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Press <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">Run</kbd> to execute your code.
        </p>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-3 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
