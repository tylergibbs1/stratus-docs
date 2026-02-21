import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
			<h1 className="text-4xl font-bold mb-4">Stratus SDK</h1>
			<p className="text-fd-muted-foreground text-lg mb-8 max-w-lg">
				A TypeScript agent SDK for Azure OpenAI. Build multi-turn
				conversations, tool-using agents, and multi-agent systems with
				streaming, guardrails, and tracing.
			</p>
			<Link
				href="/docs"
				className="inline-flex items-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
			>
				Get Started
			</Link>
		</main>
	);
}
