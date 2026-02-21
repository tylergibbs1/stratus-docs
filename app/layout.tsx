import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

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
			<body>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
