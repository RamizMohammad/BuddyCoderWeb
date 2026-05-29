import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth, B as Button, A as API_BASE } from "./router-Cifnacsd.mjs";
import { L as Label, I as Input } from "./label-CujZIQwA.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft, g as CodeXml, j as EyeOff, E as Eye, p as LogIn, T as Terminal } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
function LoginPage() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }
      const data = await response.json();
      login(email, data.access_token);
      navigate({
        to: "/editor"
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-dvh overflow-hidden px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.4
      }, className: "w-full max-w-md justify-self-center lg:justify-self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ring-glow rounded-2xl border border-border bg-card/90 p-7 shadow-2xl backdrop-blur sm:p-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent ring-1 ring-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-6 w-6 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-bold tracking-tight", children: "Welcome back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sign in to continue to BuddyCode" })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "alert", className: "mb-5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, placeholder: "you@example.com", autoComplete: "email" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, placeholder: "••••••••", autoComplete: "current-password", className: "pr-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword((s) => !s), "aria-label": showPassword ? "Hide password" : "Show password", className: "absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded text-muted-foreground hover:text-foreground", children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "h-11 w-full text-base", children: loading ? "Signing in…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
            " Sign in"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "font-medium text-primary hover:underline", children: "Create one" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: 24
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.5,
        delay: 0.1
      }, className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ring-glow overflow-hidden rounded-2xl border border-border bg-card shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-surface px-4 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Saved workspace" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-success/10 px-2 py-0.5 font-mono text-[10px] text-success", children: "SYNCED" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-[#0d1117] p-6 font-mono text-sm leading-relaxed text-foreground/90", children: `// Pick up exactly where you left off
const workspace = await buddycode.restore();

workspace.files.map((file) => {
  run(file.language, file.source);
});

> 12 snippets ready
> backend online` })
      ] }) })
    ] })
  ] });
}
export {
  LoginPage as component
};
