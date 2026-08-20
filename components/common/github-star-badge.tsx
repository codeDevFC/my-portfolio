"use client";

import Link from "next/link";

type GitHubStarBadgeProps = {
  className?: string;
  repoUrl?: string;
};

export function GitHubStarBadge({
  className = "",
  repoUrl = "https://github.com/codeDevFC",
}: GitHubStarBadgeProps) {
  return (
    <Link
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1 text-sm hover:bg-accent transition-colors ${className}`}
    >
      <span>⭐</span>
      <span>Star on GitHub</span>
    </Link>
  );
}
