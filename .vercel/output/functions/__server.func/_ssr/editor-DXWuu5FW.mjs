import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as de } from "../_libs/monaco-editor__react.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { u as useAuth, A as API_BASE, a as LogoMark, B as Button, c as cn } from "./router-Cifnacsd.mjs";
import { _ as _e } from "../_libs/cmdk.mjs";
import { R as Root, P as Portal, a as Content$1, C as Close, O as Overlay, T as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { Y as Yt, U as Ut, Q as Qt } from "../_libs/react-resizable-panels.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as ArrowLeft, i as Command$1, W as Wifi, B as WifiOff, l as FolderOpen, S as Save, x as Square, r as Play, y as Trash2, f as Clock3, s as RotateCcw, K as Keyboard, X, t as Search, p as LogIn, c as ChevronRight, F as FileCode, C as Check, P as Pen, D as Download, b as ChevronDown, n as GripVertical, T as Terminal, k as FileExclamationPoint, o as LoaderCircle, e as CircleCheck, d as CircleAlert } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/monaco-editor__loader.mjs";
import "../_libs/state-local.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
function CodeEditor({ language, code, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col bg-[#0d1117]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-surface px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-amber-400/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-emerald-500/80" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
          "main",
          language.extension
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline", children: [
        language.label,
        " • UTF-8 • LF"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      de,
      {
        height: "100%",
        language: language.monaco,
        value: code,
        onChange: (v) => onChange(v || ""),
        theme: "vs-dark",
        options: {
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
          guides: { indentation: true, bracketPairs: true }
        }
      }
    ) })
  ] });
}
const LANGUAGES = [
  {
    value: "python",
    label: "Python",
    extension: ".py",
    monaco: "python",
    emoji: "🐍",
    accent: "from-emerald-400 to-sky-500",
    defaultCode: `# Welcome to BuddyCode — Python
print("Hello, World!")
`
  },
  {
    value: "javascript",
    label: "JavaScript",
    extension: ".js",
    monaco: "javascript",
    emoji: "⚡",
    accent: "from-amber-400 to-orange-500",
    defaultCode: `// Welcome to BuddyCode — JavaScript
console.log("Hello, World!");
`
  },
  {
    value: "java",
    label: "Java",
    extension: ".java",
    monaco: "java",
    emoji: "☕",
    accent: "from-rose-400 to-pink-500",
    defaultCode: `// Welcome to BuddyCode — Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`
  },
  {
    value: "cpp",
    label: "C++",
    extension: ".cpp",
    monaco: "cpp",
    emoji: "⚙️",
    accent: "from-indigo-400 to-violet-500",
    defaultCode: `// Welcome to BuddyCode — C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`
  },
  {
    value: "c",
    label: "C",
    extension: ".c",
    monaco: "c",
    emoji: "🔧",
    accent: "from-slate-400 to-zinc-500",
    defaultCode: `// Welcome to BuddyCode — C
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`
  }
];
function LanguageSelector({ languages, selected, onChange }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        className: "flex w-full min-w-[180px] items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium transition hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-ring",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: selected.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: selected.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: selected.extension }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: { duration: 0.15 },
        className: "absolute left-0 right-0 top-full z-[100] mt-1 overflow-hidden rounded-lg border border-border bg-popover shadow-2xl ring-1 ring-black/40",
        children: languages.map((l) => {
          const active = l.value === selected.value;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                onChange(l);
                setOpen(false);
              },
              className: `flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition hover:bg-accent/10 ${active ? "bg-primary/10 text-foreground" : "text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: l.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: l.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: l.extension }),
                active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" })
              ]
            },
            l.value
          );
        })
      }
    ) })
  ] });
}
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
function OutputPanel({ output, error, isRunning, onClear, language, runTimeMs }) {
  const status = isRunning ? { label: "Running", color: "text-warning", dot: "bg-warning" } : error ? { label: "Failed", color: "text-destructive", dot: "bg-destructive" } : output ? { label: "Success", color: "text-success", dot: "bg-success" } : { label: "Idle", color: "text-muted-foreground", dot: "bg-muted-foreground/50" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col bg-[#0a0d14]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-surface px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Console" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: language }),
        runTimeMs !== null && runTimeMs !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden items-center gap-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-3 w-3" }),
          runTimeMs,
          "ms"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClear,
          className: "grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition hover:bg-accent/10 hover:text-foreground",
          "aria-label": "Clear output",
          title: "Clear output",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1 overflow-hidden p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "output", className: "flex h-full min-h-0 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid h-9 w-full grid-cols-3 rounded-md bg-muted/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "output", className: "gap-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3.5 w-3.5" }),
          " Output"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "errors", className: "gap-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileExclamationPoint, { className: "h-3.5 w-3.5" }),
          " Errors"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "details", className: "gap-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-3.5 w-3.5" }),
          " Details"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "output", className: "mt-3 min-h-0 flex-1 overflow-auto font-mono text-sm", children: isRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "flex items-center gap-3 text-warning", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Executing ",
          language,
          " code..."
        ] })
      ] }) : output ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          "Execution Successful"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-success/20 bg-success/5 p-4 text-foreground/90", children: output })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyConsole, { label: "No output yet" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "errors", className: "mt-3 min-h-0 flex-1 overflow-auto font-mono text-sm", children: error ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          "Execution Error"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-destructive", children: error })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyConsole, { label: "No errors detected" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "details", className: "mt-3 min-h-0 flex-1 overflow-auto text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailRow, { label: "Language", value: language }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailRow, { label: "Status", value: status.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailRow, { label: "Output size", value: output ? `${output.length} chars` : "0 chars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailRow, { label: "Error size", value: error ? `${error.length} chars` : "0 chars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DetailRow, { label: "Last runtime", value: runTimeMs !== null && runTimeMs !== void 0 ? `${runTimeMs}ms` : "Not run yet" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border bg-surface px-4 py-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${status.color}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${status.dot} ${isRunning ? "animate-pulse" : ""}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: status.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: output ? `${output.length} chars` : error ? `${error.length} chars` : "—" })
    ] })
  ] });
}
function EmptyConsole({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-full place-items-center py-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "mx-auto mb-4 h-10 w-10 text-muted-foreground/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground/70", children: [
      "Press ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]", children: "Run" }),
      " to execute your code."
    ] })
  ] }) });
}
function DetailRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border bg-muted/30 px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: value })
  ] });
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content$1.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Command = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _e.displayName;
const CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "overflow-hidden p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
const CommandInput = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _e.Input.displayName;
const CommandList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _e.List.displayName;
const CommandEmpty = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = _e.Empty.displayName;
const CommandGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _e.Group.displayName;
const CommandSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _e.Separator.displayName;
const CommandItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _e.Item.displayName;
const CommandShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";
const ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Ut,
  {
    className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
    ...props
  }
);
const ResizablePanel = Yt;
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Qt,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "h-2.5 w-2.5" }) })
  }
);
function EditorPage() {
  const [selectedLanguage, setSelectedLanguage] = reactExports.useState(LANGUAGES[0]);
  const [code, setCode] = reactExports.useState(LANGUAGES[0].defaultCode);
  const [output, setOutput] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [isConnected, setIsConnected] = reactExports.useState(false);
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = reactExports.useState(false);
  const [isCommandOpen, setIsCommandOpen] = reactExports.useState(false);
  const [lastRunMs, setLastRunMs] = reactExports.useState(null);
  const [fileSearch, setFileSearch] = reactExports.useState("");
  const [files, setFiles] = reactExports.useState([]);
  const [filesLoading, setFilesLoading] = reactExports.useState(false);
  const [filesError, setFilesError] = reactExports.useState("");
  const [editingFileId, setEditingFileId] = reactExports.useState(null);
  const [editingFileName, setEditingFileName] = reactExports.useState("");
  const {
    user,
    isAuthenticated
  } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    checkBackendConnection();
  }, []);
  reactExports.useEffect(() => {
    if (isAuthenticated && isSidePanelOpen) fetchFiles();
  }, [isAuthenticated, isSidePanelOpen]);
  const checkBackendConnection = async () => {
    try {
      const response = await fetch(`${API_BASE}/health`);
      if (response.ok) setIsConnected(true);
    } catch {
      setIsConnected(false);
    }
  };
  const handleLanguageChange = (language) => {
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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          language: selectedLanguage.value,
          code
        })
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
  const clearOutput = () => {
    setOutput("");
    setError("");
  };
  const fetchFiles = async () => {
    setFilesLoading(true);
    setFilesError("");
    try {
      const response = await fetch(`${API_BASE}/files`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
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
  const handleDownload = async (fileId, filename) => {
    if (!fileId) {
      setFilesError("Invalid file ID");
      return;
    }
    try {
      const response = await fetch(`${API_BASE}/download/${fileId}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
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
  const handleRenameFile = async (fileId) => {
    if (!editingFileName.trim()) {
      setFilesError("Filename cannot be empty");
      return;
    }
    try {
      const response = await fetch(`${API_BASE}/files/${fileId}/rename`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          filename: editingFileName
        })
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
      toast.error("Please sign in to save files", {
        description: "Redirecting to login…"
      });
      setTimeout(() => navigate({
        to: "/login"
      }), 1500);
      return;
    }
    setIsSaving(true);
    try {
      const filename = `code${selectedLanguage.extension}`;
      const blob = new Blob([code], {
        type: "text/plain"
      });
      const formData = new FormData();
      formData.append("file", blob, filename);
      const response = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`
        },
        body: formData
      });
      if (!response.ok) throw new Error("Failed to save file");
      toast.success("File saved", {
        description: `Saved as ${filename}`
      });
      if (isSidePanelOpen) fetchFiles();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save file");
    } finally {
      setIsSaving(false);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const filteredFiles = files.filter((file) => file.filename.toLowerCase().includes(fileSearch.toLowerCase().trim()));
  reactExports.useEffect(() => {
    const handler = (e) => {
      const meta = e.ctrlKey || e.metaKey;
      if (meta && e.key === "Enter") {
        e.preventDefault();
        runCode();
      }
      if (meta && e.key.toLowerCase() === "s") {
        e.preventDefault();
        saveFile();
      }
      if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [code, selectedLanguage, isConnected, isAuthenticated]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-dvh flex-col overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-30 border-b border-border bg-surface/90 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-14 items-center gap-2 px-2 sm:gap-3 sm:px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-accent/10 hover:text-foreground", "aria-label": "Back", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMark, { className: "h-8 w-8 rounded-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden text-sm font-semibold sm:inline", children: [
            "Buddy",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Code" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-1 hidden h-5 w-px bg-border sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, { languages: LANGUAGES, selected: selectedLanguage, onChange: handleLanguageChange }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsCommandOpen(true), className: "hidden gap-2 border border-border bg-card/40 font-mono text-xs text-muted-foreground lg:inline-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Command$1, { className: "h-3.5 w-3.5" }),
            "Actions",
            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "rounded border border-border bg-muted px-1.5 py-0.5 text-[10px]", children: "⌘K" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `hidden items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-medium lg:inline-flex ${isConnected ? "border-success/30 bg-success/10 text-success" : "border-destructive/30 bg-destructive/10 text-destructive"}`, children: [
            isConnected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "h-3 w-3" }),
            isConnected ? "Connected" : "Offline"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => setIsSidePanelOpen((o) => !o), title: "My Files", "aria-label": "My Files", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: saveFile, disabled: isSaving, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: isSaving ? "Saving…" : "Save" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: runCode, disabled: isRunning || !isConnected, className: "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90", children: [
            isRunning ? /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 fill-current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: isRunning ? "Running" : "Run" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: clearOutput, title: "Clear output", "aria-label": "Clear output", className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border px-3 py-2 sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, { languages: LANGUAGES, selected: selectedLanguage, onChange: handleLanguageChange }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden min-h-0 flex-1 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ResizablePanelGroup, { direction: "horizontal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResizablePanel, { defaultSize: 64, minSize: 42, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeEditor, { language: selectedLanguage, code, onChange: setCode }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResizableHandle, { withHandle: true, className: "bg-border/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResizablePanel, { defaultSize: 36, minSize: 24, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutputPanel, { output, error, isRunning, onClear: clearOutput, language: selectedLanguage.label, runTimeMs: lastRunMs }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col md:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeEditor, { language: selectedLanguage, code, onChange: setCode }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutputPanel, { output, error, isRunning, onClear: clearOutput, language: selectedLanguage.label, runTimeMs: lastRunMs }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center justify-between border-t border-border bg-surface px-3 font-mono text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
            selectedLanguage.label,
            " ",
            selectedLanguage.extension
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
            code.split("\n").length,
            " lines"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
            code.length,
            " chars"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          lastRunMs !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden items-center gap-1 sm:inline-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-3 w-3" }),
            lastRunMs,
            "ms"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isConnected ? "text-success" : "text-destructive", children: isConnected ? "Backend online" : "Backend offline" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandDialog, { open: isCommandOpen, onOpenChange: setIsCommandOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: "Run, save, switch language..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: "No action found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandGroup, { heading: "Actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => {
              setIsCommandOpen(false);
              runCode();
            }, disabled: isRunning || !isConnected, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
              " Run code",
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandShortcut, { children: "⌘↵" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => {
              setIsCommandOpen(false);
              saveFile();
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
              " Save file",
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandShortcut, { children: "⌘S" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => {
              setIsCommandOpen(false);
              clearOutput();
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
              " Clear console"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => {
              setIsCommandOpen(false);
              setIsSidePanelOpen(true);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4" }),
              " Open files"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => {
              setIsCommandOpen(false);
              handleLanguageChange(selectedLanguage);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
              " Reset starter code"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { heading: "Languages", children: LANGUAGES.map((language) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => {
            handleLanguageChange(language);
            setIsCommandOpen(false);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: language.emoji }),
            language.label,
            /* @__PURE__ */ jsxRuntimeExports.jsx(CommandShortcut, { children: language.extension })
          ] }, language.value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { heading: "Shortcuts", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { className: "h-4 w-4" }),
            " Command palette",
            /* @__PURE__ */ jsxRuntimeExports.jsx(CommandShortcut, { children: "⌘K" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isSidePanelOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, onClick: () => setIsSidePanelOpen(false), className: "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
          x: "100%"
        }, animate: {
          x: 0
        }, exit: {
          x: "100%"
        }, transition: {
          type: "spring",
          damping: 26,
          stiffness: 220
        }, className: "fixed right-0 top-0 z-50 flex h-dvh w-full max-w-sm flex-col border-l border-border bg-card shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold", children: "My Files" }),
                isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground", children: files.length })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsSidePanelOpen(false), "aria-label": "Close panel", className: "grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-accent/10 hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
            ] }),
            isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: fileSearch, onChange: (e) => setFileSearch(e.target.value), placeholder: "Search files", className: "h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: !isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-full place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold", children: "Sign in to access files" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Save snippets, rename them and download anytime." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-5 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
              "Sign in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ] }) })
          ] }) }) : filesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 animate-pulse rounded-lg bg-muted/50" }, i)) }) : filesError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive", children: filesError }) : files.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-full place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold", children: "No files yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Write some code and hit Save to see it here." })
          ] }) }) : filteredFiles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-full place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold", children: "No matching files" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Try a different name or extension." })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: filteredFiles.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.li, { initial: {
            opacity: 0,
            y: 6
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "group rounded-lg border border-border bg-card/60 p-3 transition hover:border-primary/40 hover:bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 flex-shrink-0 place-items-center rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              editingFileId === file._id ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: editingFileName, onChange: (e) => setEditingFileName(e.target.value), onKeyDown: (e) => {
                if (e.key === "Enter") handleRenameFile(file._id);
                if (e.key === "Escape") {
                  setEditingFileId(null);
                  setEditingFileName("");
                }
              }, className: "w-full rounded-md border border-primary bg-background px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring", autoFocus: true }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-medium", children: file.filename }),
              file.uploadedAt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-mono text-[11px] text-muted-foreground", children: formatDate(file.uploadedAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-shrink-0 items-center gap-1", children: editingFileId === file._id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleRenameFile(file._id), className: "grid h-7 w-7 place-items-center rounded-md bg-success/15 text-success hover:bg-success/25", "aria-label": "Confirm rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setEditingFileId(null);
                setEditingFileName("");
              }, className: "grid h-7 w-7 place-items-center rounded-md bg-destructive/15 text-destructive hover:bg-destructive/25", "aria-label": "Cancel rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setEditingFileId(file._id);
                setEditingFileName(file.filename);
              }, className: "grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition hover:bg-accent/10 hover:text-foreground", "aria-label": "Rename file", title: "Rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDownload(file._id, file.filename), className: "grid h-7 w-7 place-items-center rounded-md text-accent transition hover:bg-accent/10", "aria-label": "Download file", title: "Download", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }) })
            ] }) })
          ] }) }, file._id)) }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  EditorPage as component
};
