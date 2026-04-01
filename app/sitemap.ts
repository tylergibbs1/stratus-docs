import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl = "https://usestratus.dev";

export default function sitemap(): MetadataRoute.Sitemap {
	return source.getPages().map((page) => ({
		url: `${baseUrl}${page.url}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: page.url === "/" ? 1.0 : 0.7,
	}));
}
