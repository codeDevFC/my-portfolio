import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/repos/codeDevFC/my-portfolio", {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ stars: 0, error: "Failed to fetch stars" });
    }

    const data = await response.json();
    const stars = data.stargazers_count || 0;

    return NextResponse.json({
      stars,
      repo: "codeDevFC/my-portfolio",
      url: "https://github.com/codeDevFC/my-portfolio",
    });
  } catch {
    return NextResponse.json({ stars: 0, error: "Failed to fetch stars" });
  }
}
