import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Eye, EyeOff, Sparkles, UserPlus } from "lucide-react";
import { useState } from "react";
import { API_BASE } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — BuddyCode" },
      { name: "description", content: "Create a BuddyCode account to save and manage your code." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ⚠ Auth logic preserved exactly
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) return setError("Passwords do not match");
    if (password.length < 6) return setError("Password must be at least 6 characters long");

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }
      navigate({ to: "/login" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-dvh overflow-hidden px-4 py-10">
      <div className="pointer-events-none bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <Link
        to="/"
        className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="relative mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="ring-glow rounded-2xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">
              Save every experiment. Return when the idea gets interesting.
            </h2>
            <div className="mt-7 grid gap-3 text-sm text-muted-foreground">
              {["Cloud snippets with rename and download", "One editor for Python, JavaScript, Java, C and C++", "Fast command palette and focused console"].map((item) => (
                <div key={item} className="rounded-lg border border-border bg-muted/30 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md justify-self-center lg:justify-self-end"
        >
          <div className="ring-glow rounded-2xl border border-border bg-card/90 p-7 shadow-2xl backdrop-blur sm:p-9">
            <div className="mb-7 flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent ring-1 ring-white/10">
                <Code2 className="h-6 w-6 text-white" />
              </span>
              <h1 className="mt-4 text-2xl font-bold tracking-tight">Create your account</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Start saving and organizing your code in seconds
              </p>
            </div>

          {error && (
            <div
              role="alert"
              className="mb-5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="At least 6 characters"
                  autoComplete="new-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input
                id="confirm"
                type={showPassword ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                minLength={6}
                placeholder="Repeat password"
                autoComplete="new-password"
              />
            </div>

            <Button type="submit" disabled={loading} className="h-11 w-full text-base">
              {loading ? "Creating account…" : (<><UserPlus className="h-4 w-4" /> Create account</>)}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
