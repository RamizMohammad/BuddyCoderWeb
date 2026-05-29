import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, B as Button, a as LogoMark } from "./router-Cifnacsd.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { r as Play, a as ArrowRight, w as Sparkles, F as FileCode, Z as Zap, h as Coffee, u as Settings, H as Wrench, T as Terminal, g as CodeXml, m as Globe, v as Shield, R as Rocket, G as Github, z as Twitter, L as Linkedin } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const languages = [{
  name: "Python",
  icon: FileCode,
  gradient: "from-emerald-400 to-sky-500",
  tagline: "Data, AI, scripting & more.",
  chips: ["Data Science", "AI/ML", "Backend"]
}, {
  name: "JavaScript",
  icon: Zap,
  gradient: "from-amber-400 to-orange-500",
  tagline: "The language of the web.",
  chips: ["Web", "Node.js", "Full-stack"]
}, {
  name: "Java",
  icon: Coffee,
  gradient: "from-rose-400 to-pink-500",
  tagline: "Enterprise, Android & robust services.",
  chips: ["JVM", "Android", "Spring"]
}, {
  name: "C++",
  icon: Settings,
  gradient: "from-indigo-400 to-violet-500",
  tagline: "Systems & high-performance code.",
  chips: ["Systems", "Gaming", "HPC"]
}, {
  name: "C",
  icon: Wrench,
  gradient: "from-slate-400 to-zinc-500",
  tagline: "Bare-metal performance, total control.",
  chips: ["Embedded", "OS", "Drivers"]
}];
const features = [{
  icon: Terminal,
  title: "Real-time execution",
  text: "Compile and run on our cloud runners in milliseconds with full stdout, stderr and exit codes."
}, {
  icon: CodeXml,
  title: "Professional editor",
  text: "Monaco — the engine behind VS Code — with IntelliSense, ligatures and bracket pair colorization."
}, {
  icon: Globe,
  title: "Zero setup",
  text: "No installs, no configs. Open a tab, pick a language, ship code from anywhere."
}, {
  icon: Shield,
  title: "Sandboxed runtime",
  text: "Each execution runs isolated. Your code runs safely, every time."
}, {
  icon: Rocket,
  title: "Save & resume",
  text: "Sign in to persist your snippets, rename and download them whenever you need."
}, {
  icon: Sparkles,
  title: "Beautifully dark",
  text: "Designed for developers. High contrast, low fatigue, premium feel."
}];
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-success" }),
            "Live compilers across 5 languages"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl", children: [
            "The premium online IDE for",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "modern developers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "Write, compile and run Python, JavaScript, Java, C and C++ in a beautifully crafted editor. No setup. No friction. Just code." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "group h-12 px-6 text-base shadow-lg ring-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
              " Launch the editor",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "h-12 px-6 text-base bg-card/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
              " Create free account"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "ring-glow mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-surface px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-amber-400/80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-emerald-500/80" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 font-mono text-xs text-muted-foreground", children: "hello.py — buddycode" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 sm:flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "python 3.12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "run-pulse rounded-md bg-gradient-to-r from-primary to-accent px-2.5 py-1 text-xs font-medium text-white", children: "Running" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "overflow-x-auto bg-[#0d1117] p-6 font-mono text-xs leading-relaxed text-foreground/90 sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "# BuddyCode hero demo" }),
              "\n",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-400", children: "def" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300", children: "fib" }),
              "(n):",
              "\n",
              "    ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-400", children: "if" }),
              " n ",
              "<",
              "= ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "1" }),
              ": ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-400", children: "return" }),
              " n",
              "\n",
              "    ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-400", children: "return" }),
              " fib(n - ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "1" }),
              ") + fib(n - ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "2" }),
              ")",
              "\n\n",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "code-reveal", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-300", children: "print" }),
                "(",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300", children: [
                  'f"fib(12) = ',
                  "{"
                ] }),
                "fib(",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "12" }),
                ")",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-300", children: [
                  "}",
                  '"'
                ] }),
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse text-primary", children: "|" }),
              "\n"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-[#0a0d14] p-6 md:border-l md:border-t-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-success", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-success" }),
                  " Output"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-muted-foreground", children: "42ms · exit 0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "rounded-lg border border-success/20 bg-success/5 p-4 font-mono text-sm text-foreground/90", children: "fib(12) = 144" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-3 gap-2 text-center font-mono text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-muted/30 px-2 py-2", children: "stdout" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-muted/30 px-2 py-2", children: "stderr 0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border bg-muted/30 px-2 py-2", children: "saved" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "relative py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "Languages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Five languages. One beautiful editor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Switch between languages instantly — your editor settings, theme and execution environment follow you everywhere." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: languages.map((lang, i) => {
        const LangIcon = lang.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-50px"
        }, transition: {
          duration: 0.45,
          delay: i * 0.05
        }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${lang.gradient} shadow-lg ring-1 ring-white/10`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LangIcon, { className: "h-6 w-6 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: lang.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: lang.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: lang.chips.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground", children: c }, c)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" })
        ] }, lang.name);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "Why BuddyCode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl", children: "Built for developers who care about their tools." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: features.map((f) => {
        const FeatureIcon = f.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/60 p-6 transition hover:bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: f.text })
        ] }, f.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ring-glow relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/10 p-10 text-center sm:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: [
          "Ready to write something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "beautiful" }),
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Open the editor — no signup required. Sign up later to save your work." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "h-12 px-6 text-base", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
            " Start coding"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "h-12 px-6 text-base bg-card/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Create account" }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "border-t border-border bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMark, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold", children: [
              "Buddy",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Code" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: "A premium online coding platform for developers, students and educators. Beautifully crafted. Privacy-friendly. Always fast." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center gap-2", children: [{
            href: "https://github.com/RamizMohammad",
            Icon: Github,
            label: "GitHub"
          }, {
            href: "https://x.com/Mohammad__Ramiz",
            Icon: Twitter,
            label: "Twitter"
          }, {
            href: "https://www.linkedin.com/in/mohammad-ramiz-886468217/",
            Icon: Linkedin,
            label: "LinkedIn"
          }].map(({
            href,
            Icon,
            label
          }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", "aria-label": label, className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition hover:border-primary/40 hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/editor", className: "hover:text-foreground", children: "Editor" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Languages" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-foreground", children: "Why BuddyCode" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hover:text-foreground", children: "Login" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "hover:text-foreground", children: "Register" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " BuddyCode · Crafted with ❤ by Mohammad Ramiz"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground", children: "v2.0 · all systems operational" })
      ] })
    ] }) })
  ] });
}
export {
  LandingPage as component
};
