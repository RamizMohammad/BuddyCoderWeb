import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, Menu, Sparkles, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/buddycode/LogoMark";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Languages", href: "/#features" },
  { label: "Why BuddyCode", href: "/#about" },
  { label: "Editor", href: "/editor" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <LogoMark />
            <span className="text-lg font-semibold tracking-tight">
              Buddy<span className="text-gradient-brand">Code</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("#")[0]) && item.href !== "/";
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-foreground bg-accent/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {isAuthenticated ? (
              <>
                <span className="hidden lg:inline text-xs text-muted-foreground font-mono">
                  {user?.email}
                </span>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
                <Button asChild size="sm">
                  <Link to="/editor">
                    <Sparkles className="h-4 w-4" /> Open Editor
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">
                    <LogIn className="h-4 w-4" /> Login
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/register">
                    <UserPlus className="h-4 w-4" /> Get started
                  </Link>
                </Button>
              </>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-md text-muted-foreground hover:bg-accent/10 hover:text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border/60 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
                  {isAuthenticated ? (
                    <>
                      <Button asChild>
                        <Link to="/editor" onClick={() => setOpen(false)}>
                          Open Editor
                        </Link>
                      </Button>
                      <Button variant="ghost" onClick={() => { logout(); setOpen(false); }}>
                        <LogOut className="h-4 w-4" /> Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button asChild variant="ghost">
                        <Link to="/login" onClick={() => setOpen(false)}>
                          <LogIn className="h-4 w-4" /> Login
                        </Link>
                      </Button>
                      <Button asChild>
                        <Link to="/register" onClick={() => setOpen(false)}>
                          <UserPlus className="h-4 w-4" /> Get started
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
