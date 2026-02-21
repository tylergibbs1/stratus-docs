import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

export const metadata = {
	title: {
		template: "%s | Stratus SDK",
		default: "Stratus SDK",
	},
	description: "TypeScript agent SDK for Azure OpenAI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${jetbrainsMono.variable}`}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
