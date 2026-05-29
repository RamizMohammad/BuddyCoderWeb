import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, e as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { H as Wrench, u as Settings, h as Coffee, Z as Zap, F as FileCode, a as ArrowRight, g as CodeXml, q as LogOut, w as Sparkles, p as LogIn, U as UserPlus, X, M as Menu } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-ClyvPlgN.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const AuthContext = reactExports.createContext(void 0);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token && email) setUser({ email, token });
  }, []);
  const login = (email, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setUser({ email, token });
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, login, logout, isAuthenticated: !!user }, children });
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
const API_BASE = "https://api.server.buddycode.online";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs tracking-widest text-muted-foreground", children: "ERR_NOT_FOUND" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-7xl font-bold tracking-tight text-gradient-brand", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The route you requested does not exist on this server." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred while rendering this page." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent/20",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a1a2e" },
      { title: "BuddyCode — Premium Online Code Editor & Compiler" },
      {
        name: "description",
        content: "BuddyCode is a premium online IDE and compiler for Python, JavaScript, Java, C and C++. Write, compile and run code instantly with zero setup."
      },
      { name: "author", content: "BuddyCode" },
      { property: "og:title", content: "BuddyCode — Premium Online Code Editor" },
      { property: "og:description", content: "Write, compile and run code in your browser." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
          rel: "stylesheet"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", theme: "dark", richColors: true, closeButton: true })
  ] }) });
}
const $$splitComponentImporter$8 = () => import("./register-CjLThTC_.mjs");
const Route$8 = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create account — BuddyCode"
    }, {
      name: "description",
      content: "Create a BuddyCode account to save and manage your code."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function LogoMark({ className = "h-9 w-9 rounded-lg", imageClassName = "h-full w-full" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `relative grid place-items-center overflow-hidden bg-surface-elevated shadow-lg ring-1 ring-white/10 transition-transform group-hover:scale-105 ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/logo.png",
          alt: "",
          "aria-hidden": "true",
          className: `object-contain ${imageClassName}`,
          draggable: false
        }
      )
    }
  );
}
const navItems = [
  { label: "Home", href: "/" },
  { label: "Languages", href: "/#features" },
  { label: "Why BuddyCode", href: "/#about" },
  { label: "Editor", href: "/editor" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border-b border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMark, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold tracking-tight", children: [
          "Buddy",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Code" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: navItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && item.href !== "/";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: item.href,
            className: `rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${active ? "text-foreground bg-accent/10" : "text-muted-foreground hover:text-foreground"}`,
            children: item.label
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-2 md:flex", children: isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:inline text-xs text-muted-foreground font-mono", children: user?.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: logout, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Logout"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Open Editor"
        ] }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
          " Login"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
          " Get started"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Toggle menu",
          onClick: () => setOpen((o) => !o),
          className: "grid h-10 w-10 place-items-center rounded-md text-muted-foreground hover:bg-accent/10 hover:text-foreground md:hidden",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden border-t border-border/60 md:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3", children: [
          navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              onClick: () => setOpen(false),
              className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground",
              children: item.label
            },
            item.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-col gap-2 border-t border-border/60 pt-3", children: isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/editor", onClick: () => setOpen(false), children: "Open Editor" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: () => {
              logout();
              setOpen(false);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
              " Logout"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", onClick: () => setOpen(false), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
              " Login"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", onClick: () => setOpen(false), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
              " Get started"
            ] }) })
          ] }) })
        ] })
      }
    ) })
  ] }) });
}
const LANG_META = {
  python: {
    slug: "python",
    name: "Python",
    title: "Online Python Compiler — Run Python 3 Code Instantly | BuddyCode",
    description: "Run Python 3 code online instantly with BuddyCode. Free, fast, no installation. Perfect for learning, prototyping and interviews.",
    keywords: "python online compiler, run python online, python 3 IDE, online python editor",
    tagline: "Run Python 3 in your browser — instantly.",
    Icon: FileCode,
    gradient: "from-emerald-400 to-sky-500",
    bullets: ["Python 3.12 runtime", "Print, input & full stdlib", "Stdout, stderr & exit codes"],
    sample: `def greet(name):
    return f"Hello, {name}"

print(greet("BuddyCode"))`
  },
  javascript: {
    slug: "javascript",
    name: "JavaScript",
    title: "Online JavaScript Compiler — Run JS Instantly | BuddyCode",
    description: "Write, compile and run modern JavaScript online with BuddyCode. ES2022+, instant output, zero setup.",
    keywords: "javascript online compiler, online js editor, run javascript online",
    tagline: "Modern JavaScript — right in the browser.",
    Icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    bullets: ["ES2022+ support", "Console output", "Instant execution"],
    sample: `const tools = ["editor", "runner", "files"];
console.log(tools.join(" + "));`
  },
  java: {
    slug: "java",
    name: "Java",
    title: "Online Java Compiler — Run Java Code Instantly | BuddyCode",
    description: "Compile and run Java code online. JDK runtime, full standard library, instant feedback. Free Java IDE in your browser.",
    keywords: "java online compiler, online java IDE, run java online, jdk online",
    tagline: "Compile and run Java — zero setup.",
    Icon: Coffee,
    gradient: "from-rose-400 to-pink-500",
    bullets: ["Modern JDK", "Full standard library", "Beautiful Monaco editor"],
    sample: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello BuddyCode");
  }
}`
  },
  cpp: {
    slug: "cpp",
    name: "C++",
    title: "Online C++ Compiler — Run C++ Code Instantly | BuddyCode",
    description: "Run C++ online with BuddyCode. Modern compiler, fast execution, perfect for interviews, contests and learning.",
    keywords: "c++ online compiler, online cpp ide, run c++ online",
    tagline: "Write, compile and run C++ in seconds.",
    Icon: Settings,
    gradient: "from-indigo-400 to-violet-500",
    bullets: ["Modern C++ compiler", "STL support", "Instant feedback"],
    sample: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello BuddyCode";
}`
  },
  c: {
    slug: "c",
    name: "C",
    title: "Online C Compiler — Run C Code Instantly | BuddyCode",
    description: "Compile and run C code online with BuddyCode. Free, fast, no installation. Great for learning systems programming.",
    keywords: "c online compiler, run c online, online c IDE",
    tagline: "Classic C — modern editor.",
    Icon: Wrench,
    gradient: "from-slate-400 to-zinc-500",
    bullets: ["GCC-class compiler", "stdio & stdlib", "Beautiful editor"],
    sample: `#include <stdio.h>

int main() {
  printf("Hello BuddyCode\\n");
  return 0;
}`
  }
};
function LanguageMarketing({ slug }) {
  const m = LANG_META[slug];
  const Icon = m.Icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${m.gradient} shadow-2xl ring-1 ring-white/10`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 font-mono text-xs uppercase tracking-widest text-primary", children: [
            m.name,
            " on BuddyCode"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-5xl", children: m.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-muted-foreground", children: m.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "h-12 px-6 text-base", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", children: [
              "Open ",
              m.name,
              " editor ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "h-12 px-6 text-base bg-card/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4" }),
              " All languages"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ring-glow overflow-hidden rounded-2xl border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-surface px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-amber-400/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-emerald-500/80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
              "main",
              m.slug === "javascript" ? ".js" : m.slug === "python" ? ".py" : m.slug === "java" ? ".java" : m.slug === "cpp" ? ".cpp" : ".c"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "min-h-64 overflow-auto bg-[#0d1117] p-5 font-mono text-sm leading-relaxed text-foreground/90", children: m.sample })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-3", children: m.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-primary", children: "✓ Feature" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-medium", children: b })
      ] }, b)) })
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import("./python-qRFxEY8R.mjs");
const Route$7 = createFileRoute("/python")({
  head: () => ({
    meta: [{
      title: LANG_META.python.title
    }, {
      name: "description",
      content: LANG_META.python.description
    }, {
      name: "keywords",
      content: LANG_META.python.keywords
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./login-DMnAM2Vx.mjs");
const Route$6 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login — BuddyCode"
    }, {
      name: "description",
      content: "Sign in to BuddyCode to access your saved files."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./javascript-Cf9nuDkZ.mjs");
const Route$5 = createFileRoute("/javascript")({
  head: () => ({
    meta: [{
      title: LANG_META.javascript.title
    }, {
      name: "description",
      content: LANG_META.javascript.description
    }, {
      name: "keywords",
      content: LANG_META.javascript.keywords
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./java-B5ZZijML.mjs");
const Route$4 = createFileRoute("/java")({
  head: () => ({
    meta: [{
      title: LANG_META.java.title
    }, {
      name: "description",
      content: LANG_META.java.description
    }, {
      name: "keywords",
      content: LANG_META.java.keywords
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./editor-DXWuu5FW.mjs");
const Route$3 = createFileRoute("/editor")({
  head: () => ({
    meta: [{
      title: "Editor — BuddyCode Online IDE"
    }, {
      name: "description",
      content: "BuddyCode online editor — write, compile and run Python, JavaScript, Java, C and C++ instantly."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cpp-CHVprXHL.mjs");
const Route$2 = createFileRoute("/cpp")({
  head: () => ({
    meta: [{
      title: LANG_META.cpp.title
    }, {
      name: "description",
      content: LANG_META.cpp.description
    }, {
      name: "keywords",
      content: LANG_META.cpp.keywords
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./c-Bwok3MWG.mjs");
const Route$1 = createFileRoute("/c")({
  head: () => ({
    meta: [{
      title: LANG_META.c.title
    }, {
      name: "description",
      content: LANG_META.c.description
    }, {
      name: "keywords",
      content: LANG_META.c.keywords
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DIs48O2l.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "BuddyCode — Online Compiler for Python, Java, C, C++, JavaScript"
    }, {
      name: "description",
      content: "BuddyCode is a premium online IDE and compiler. Write, compile and run Python, Java, C, C++ and JavaScript instantly in your browser."
    }, {
      property: "og:title",
      content: "BuddyCode — Premium Online Code Editor"
    }, {
      property: "og:description",
      content: "Write, compile and run code in your browser with a developer-grade editor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const RegisterRoute = Route$8.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$9
});
const PythonRoute = Route$7.update({
  id: "/python",
  path: "/python",
  getParentRoute: () => Route$9
});
const LoginRoute = Route$6.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$9
});
const JavascriptRoute = Route$5.update({
  id: "/javascript",
  path: "/javascript",
  getParentRoute: () => Route$9
});
const JavaRoute = Route$4.update({
  id: "/java",
  path: "/java",
  getParentRoute: () => Route$9
});
const EditorRoute = Route$3.update({
  id: "/editor",
  path: "/editor",
  getParentRoute: () => Route$9
});
const CppRoute = Route$2.update({
  id: "/cpp",
  path: "/cpp",
  getParentRoute: () => Route$9
});
const CRoute = Route$1.update({
  id: "/c",
  path: "/c",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  CRoute,
  CppRoute,
  EditorRoute,
  JavaRoute,
  JavascriptRoute,
  LoginRoute,
  PythonRoute,
  RegisterRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  API_BASE as A,
  Button as B,
  LanguageMarketing as L,
  Navbar as N,
  LogoMark as a,
  cn as c,
  router as r,
  useAuth as u
};
