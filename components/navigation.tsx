"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            {siteConfig.name}
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className={`text-sm transition-colors hover:text-foreground/80 ${
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-sm transition-colors hover:text-foreground/80 ${
                pathname === "/projects" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors hover:text-foreground/80 ${
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              About
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
