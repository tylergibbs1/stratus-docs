import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { source } from "@/lib/source";
import { baseOptions } from "@/app/layout.config";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL("https://usestratus.dev"),
	title: {
		template: "%s | Stratus SDK",
		default: "Stratus SDK - TypeScript Agent SDK for Azure OpenAI",
	},
	description:
		"Build AI agents with TypeScript using Azure OpenAI. Stratus SDK provides tools, handoffs, sessions, streaming, and more.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://usestratus.dev",
		siteName: "Stratus SDK",
		title: "Stratus SDK - TypeScript Agent SDK for Azure OpenAI",
		description:
			"Build AI agents with TypeScript using Azure OpenAI. Stratus SDK provides tools, handoffs, sessions, streaming, and more.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Stratus SDK",
		description:
			"Build AI agents with TypeScript using Azure OpenAI. Stratus SDK provides tools, handoffs, sessions, streaming, and more.",
	},
	alternates: {
		canonical: "/",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${jetbrainsMono.variable}`}>
				<RootProvider>
					<DocsLayout tree={source.pageTree} {...baseOptions}>
						{children}
					</DocsLayout>
				</RootProvider>
				<Analytics />
			</body>
		</html>
	);
}
