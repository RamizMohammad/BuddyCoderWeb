import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Coffee,
  FileCode,
  Github,
  Globe,
  Linkedin,
  Play,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Terminal,
  Twitter,
  Wrench,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/buddycode/Navbar";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/buddycode/LogoMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuddyCode — Online Compiler for Python, Java, C, C++, JavaScript" },
      {
        name: "description",
        content:
          "BuddyCode is a premium online IDE and compiler. Write, compile and run Python, Java, C, C++ and JavaScript instantly in your browser.",
      },
      { property: "og:title", content: "BuddyCode — Premium Online Code Editor" },
      {
        property: "og:description",
        content: "Write, compile and run code in your browser with a developer-grade editor.",
      },
    ],
  }),
  component: LandingPage,
});

const languages = [
  { name: "Python", icon: FileCode, gradient: "from-emerald-400 to-sky-500", tagline: "Data, AI, scripting & more.", chips: ["Data Science", "AI/ML", "Backend"] },
  { name: "JavaScript", icon: Zap, gradient: "from-amber-400 to-orange-500", tagline: "The language of the web.", chips: ["Web", "Node.js", "Full-stack"] },
  { name: "Java", icon: Coffee, gradient: "from-rose-400 to-pink-500", tagline: "Enterprise, Android & robust services.", chips: ["JVM", "Android", "Spring"] },
  { name: "C++", icon: Settings, gradient: "from-indigo-400 to-violet-500", tagline: "Systems & high-performance code.", chips: ["Systems", "Gaming", "HPC"] },
  { name: "C", icon: Wrench, gradient: "from-slate-400 to-zinc-500", tagline: "Bare-metal performance, total control.", chips: ["Embedded", "OS", "Drivers"] },
];

const features = [
  { icon: Terminal, title: "Real-time execution", text: "Compile and run on our cloud runners in milliseconds with full stdout, stderr and exit codes." },
  { icon: Code2, title: "Professional editor", text: "Monaco — the engine behind VS Code — with IntelliSense, ligatures and bracket pair colorization." },
  { icon: Globe, title: "Zero setup", text: "No installs, no configs. Open a tab, pick a language, ship code from anywhere." },
  { icon: Shield, title: "Sandboxed runtime", text: "Each execution runs isolated. Your code runs safely, every time." },
  { icon: Rocket, title: "Save & resume", text: "Sign in to persist your snippets, rename and download them whenever you need." },
  { icon: Sparkles, title: "Beautifully dark", text: "Designed for developers. High contrast, low fatigue, premium feel." },
];

function LandingPage() {
  return (
    <div className="min-h-dvh">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              Live compilers across 5 languages
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The premium online IDE for{" "}
              <span className="text-gradient-brand">modern developers</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Write, compile and run Python, JavaScript, Java, C and C++ in a
              beautifully crafted editor. No setup. No friction. Just code.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="group h-12 px-6 text-base shadow-lg ring-glow">
                <Link to="/editor">
                  <Play className="h-4 w-4" /> Launch the editor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base bg-card/60">
                <Link to="/register">
                  <Sparkles className="h-4 w-4" /> Create free account
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Live editor preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ring-glow mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-3 font-mono text-xs text-muted-foreground">hello.py — buddycode</span>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">python 3.12</span>
                <span className="run-pulse rounded-md bg-gradient-to-r from-primary to-accent px-2.5 py-1 text-xs font-medium text-white">
                  Running
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <pre className="overflow-x-auto bg-[#0d1117] p-6 font-mono text-xs leading-relaxed text-foreground/90 sm:text-sm">
                <span className="text-muted-foreground"># BuddyCode hero demo</span>
                {"\n"}
                <span className="text-violet-400">def</span> <span className="text-sky-300">fib</span>(n):{"\n"}
                {"    "}<span className="text-violet-400">if</span> n {"<"}= <span className="text-amber-300">1</span>: <span className="text-violet-400">return</span> n{"\n"}
                {"    "}<span className="text-violet-400">return</span> fib(n - <span className="text-amber-300">1</span>) + fib(n - <span className="text-amber-300">2</span>){"\n\n"}
                <span className="code-reveal">
                  <span className="text-sky-300">print</span>(<span className="text-emerald-300">f"fib(12) = {"{"}</span>fib(<span className="text-amber-300">12</span>)<span className="text-emerald-300">{"}"}"</span>)
                </span>
                <span className="animate-pulse text-primary">|</span>{"\n"}
              </pre>
              <div className="border-t border-border bg-[#0a0d14] p-6 md:border-l md:border-t-0">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-success">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Output
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">42ms · exit 0</span>
                </div>
                <pre className="rounded-lg border border-success/20 bg-success/5 p-4 font-mono text-sm text-foreground/90">fib(12) = 144</pre>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center font-mono text-[11px] text-muted-foreground">
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-2">stdout</span>
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-2">stderr 0</span>
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-2">saved</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section id="features" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Languages</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Five languages. One beautiful editor.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Switch between languages instantly — your editor settings, theme and execution
              environment follow you everywhere.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((lang, i) => {
              const LangIcon = lang.icon;
              return (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-2xl"
                >
                  <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${lang.gradient} shadow-lg ring-1 ring-white/10`}>
                    <LangIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{lang.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{lang.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {lang.chips.map((c) => (
                      <span key={c} className="rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="about" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Why BuddyCode</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for developers who care about their tools.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const FeatureIcon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-border bg-card/60 p-6 transition hover:bg-card">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <FeatureIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="ring-glow relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/10 p-10 text-center sm:p-14">
            <div className="pointer-events-none bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to write something <span className="text-gradient-brand">beautiful</span>?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Open the editor — no signup required. Sign up later to save your work.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="h-12 px-6 text-base">
                  <Link to="/editor">
                    <Play className="h-4 w-4" /> Start coding
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base bg-card/60">
                  <Link to="/register">Create account</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2.5">
                <LogoMark />
                <span className="text-lg font-semibold">
                  Buddy<span className="text-gradient-brand">Code</span>
                </span>
              </Link>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                A premium online coding platform for developers, students and educators.
                Beautifully crafted. Privacy-friendly. Always fast.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {[
                  { href: "https://github.com/RamizMohammad", Icon: Github, label: "GitHub" },
                  { href: "https://x.com/Mohammad__Ramiz", Icon: Twitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/in/mohammad-ramiz-886468217/", Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/editor" className="hover:text-foreground">Editor</Link></li>
                <li><a href="#features" className="hover:text-foreground">Languages</a></li>
                <li><a href="#about" className="hover:text-foreground">Why BuddyCode</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Account</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/login" className="hover:text-foreground">Login</Link></li>
                <li><Link to="/register" className="hover:text-foreground">Register</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} BuddyCode · Crafted with ❤ by Mohammad Ramiz
            </p>
            <p className="font-mono text-[11px] text-muted-foreground">v2.0 · all systems operational</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
