"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return stored === "dark" || (!stored && systemDark);
}

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) setIsDark(e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    if (next) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    >
      {isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
