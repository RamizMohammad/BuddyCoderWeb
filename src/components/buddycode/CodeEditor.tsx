import { Editor } from "@monaco-editor/react";
import type { Language } from "./languages";

interface Props {
  language: Language;
  code: string;
  onChange: (v: string) => void;
}

export function CodeEditor({ language, code, onChange }: Props) {
  return (
    <div className="flex h-full flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            main{language.extension}
          </span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
          {language.label} • UTF-8 • LF
        </span>
      </div>

      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          language={language.monaco}
          value={code}
          onChange={(v) => onChange(v || "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
            fontLigatures: true,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            wordWrap: "on",
            minimap: { enabled: true, renderCharacters: false },
            smoothScrolling: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
            renderLineHighlight: "all",
            padding: { top: 16, bottom: 16 },
            bracketPairColorization: { enabled: true },
            guides: { indentation: true, bracketPairs: true },
          }}
        />
      </div>
    </div>
  );
}
