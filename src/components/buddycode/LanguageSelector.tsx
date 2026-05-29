import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import type { Language } from "./languages";

interface Props {
  languages: Language[];
  selected: Language;
  onChange: (l: Language) => void;
}

export function LanguageSelector({ languages, selected, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full min-w-[180px] items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium transition hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <span className="text-base">{selected.emoji}</span>
        <span className="flex-1 text-left">{selected.label}</span>
        <span className="font-mono text-xs text-muted-foreground">{selected.extension}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-lg border border-border bg-popover shadow-2xl ring-1 ring-black/40"
          >
            {languages.map((l) => {
              const active = l.value === selected.value;
              return (
                <button
                  key={l.value}
                  onClick={() => {
                    onChange(l);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition hover:bg-accent/10 ${
                    active ? "bg-primary/10 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-base">{l.emoji}</span>
                  <span className="flex-1">{l.label}</span>
                  <span className="font-mono text-xs">{l.extension}</span>
                  {active && <Check className="h-4 w-4 text-primary" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
