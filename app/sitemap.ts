import type { MetadataRoute } from "next";
import { source } from "@/lib/source";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://usestratus.dev";

function getFileModTime(pageUrl: string): Date {
	// pageUrl is like "/" or "/agents" or "/guides/testing" or "/azure"
	const slug = pageUrl === "/" ? "index" : pageUrl.slice(1);
	const candidates = [
		path.join(process.cwd(), "content/docs", `${slug}.mdx`),
		path.join(process.cwd(), "content/docs", slug, "index.mdx"),
	];
	for (const filePath of candidates) {
		try {
			return fs.statSync(filePath).mtime;
		} catch {
			// try next candidate
		}
	}
	return new Date("2026-03-31");
}

export default function sitemap(): MetadataRoute.Sitemap {
	return source.getPages().map((page) => {
		const lastModified = getFileModTime(page.url);
		const isGuide = page.url.startsWith("/guides/");
		const isHome = page.url === "/";

		return {
			url: `${baseUrl}${page.url}`,
			lastModified,
			changeFrequency: isHome ? "daily" : "weekly",
			priority: isHome ? 1.0 : isGuide ? 0.8 : 0.6,
		};
	});
}
