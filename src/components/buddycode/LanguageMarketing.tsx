import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Coffee, FileCode, Settings, Wrench, Zap } from "lucide-react";
import { Navbar } from "@/components/buddycode/Navbar";
import { Button } from "@/components/ui/button";
import type { ComponentType } from "react";

interface LangMeta {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string;
  tagline: string;
  Icon: ComponentType<{ className?: string }>;
  gradient: string;
  bullets: string[];
  sample: string;
}

export const LANG_META: Record<string, LangMeta> = {
  python: {
    slug: "python",
    name: "Python",
    title: "Online Python Compiler — Run Python 3 Code Instantly | BuddyCode",
    description:
      "Run Python 3 code online instantly with BuddyCode. Free, fast, no installation. Perfect for learning, prototyping and interviews.",
    keywords: "python online compiler, run python online, python 3 IDE, online python editor",
    tagline: "Run Python 3 in your browser — instantly.",
    Icon: FileCode,
    gradient: "from-emerald-400 to-sky-500",
    bullets: ["Python 3.12 runtime", "Print, input & full stdlib", "Stdout, stderr & exit codes"],
    sample: `def greet(name):\n    return f"Hello, {name}"\n\nprint(greet("BuddyCode"))`,
  },
  javascript: {
    slug: "javascript",
    name: "JavaScript",
    title: "Online JavaScript Compiler — Run JS Instantly | BuddyCode",
    description:
      "Write, compile and run modern JavaScript online with BuddyCode. ES2022+, instant output, zero setup.",
    keywords: "javascript online compiler, online js editor, run javascript online",
    tagline: "Modern JavaScript — right in the browser.",
    Icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    bullets: ["ES2022+ support", "Console output", "Instant execution"],
    sample: `const tools = ["editor", "runner", "files"];\nconsole.log(tools.join(" + "));`,
  },
  java: {
    slug: "java",
    name: "Java",
    title: "Online Java Compiler — Run Java Code Instantly | BuddyCode",
    description:
      "Compile and run Java code online. JDK runtime, full standard library, instant feedback. Free Java IDE in your browser.",
    keywords: "java online compiler, online java IDE, run java online, jdk online",
    tagline: "Compile and run Java — zero setup.",
    Icon: Coffee,
    gradient: "from-rose-400 to-pink-500",
    bullets: ["Modern JDK", "Full standard library", "Beautiful Monaco editor"],
    sample: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello BuddyCode");\n  }\n}`,
  },
  cpp: {
    slug: "cpp",
    name: "C++",
    title: "Online C++ Compiler — Run C++ Code Instantly | BuddyCode",
    description:
      "Run C++ online with BuddyCode. Modern compiler, fast execution, perfect for interviews, contests and learning.",
    keywords: "c++ online compiler, online cpp ide, run c++ online",
    tagline: "Write, compile and run C++ in seconds.",
    Icon: Settings,
    gradient: "from-indigo-400 to-violet-500",
    bullets: ["Modern C++ compiler", "STL support", "Instant feedback"],
    sample: `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello BuddyCode";\n}`,
  },
  c: {
    slug: "c",
    name: "C",
    title: "Online C Compiler — Run C Code Instantly | BuddyCode",
    description:
      "Compile and run C code online with BuddyCode. Free, fast, no installation. Great for learning systems programming.",
    keywords: "c online compiler, run c online, online c IDE",
    tagline: "Classic C — modern editor.",
    Icon: Wrench,
    gradient: "from-slate-400 to-zinc-500",
    bullets: ["GCC-class compiler", "stdio & stdlib", "Beautiful editor"],
    sample: `#include <stdio.h>\n\nint main() {\n  printf("Hello BuddyCode\\n");\n  return 0;\n}`,
  },
};

export function LanguageMarketing({ slug }: { slug: keyof typeof LANG_META }) {
  const m = LANG_META[slug];
  const Icon = m.Icon;
  return (
    <div className="min-h-dvh">
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${m.gradient} shadow-2xl ring-1 ring-white/10`}>
              <Icon className="h-8 w-8 text-white" />
            </span>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-primary">
              {m.name} on BuddyCode
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {m.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">{m.description}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link to="/editor">
                  Open {m.name} editor <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base bg-card/60">
                <Link to="/">
                  <Code2 className="h-4 w-4" /> All languages
                </Link>
              </Button>
            </div>
          </div>

          <div className="ring-glow overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                main{m.slug === "javascript" ? ".js" : m.slug === "python" ? ".py" : m.slug === "java" ? ".java" : m.slug === "cpp" ? ".cpp" : ".c"}
              </span>
            </div>
            <pre className="min-h-64 overflow-auto bg-[#0d1117] p-5 font-mono text-sm leading-relaxed text-foreground/90">
              {m.sample}
            </pre>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {m.bullets.map((b) => (
            <div key={b} className="rounded-xl border border-border bg-card/60 p-5 text-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-primary">✓ Feature</span>
              <p className="mt-2 font-medium">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
