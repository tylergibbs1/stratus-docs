"use client";

import { useState, useCallback } from "react";

export function LLMCopyButton({ markdownUrl }: { markdownUrl: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = useCallback(async () => {
		try {
			const res = await fetch(markdownUrl);
			const text = await res.text();
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// ignore
		}
	}, [markdownUrl]);

	return (
		<button
			type="button"
			onClick={handleCopy}
			className="inline-flex items-center gap-1.5 rounded-md border bg-fd-secondary/50 px-2.5 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
		>
			{copied ? (
				<>
					<CheckIcon />
					Copied
				</>
			) : (
				<>
					<CopyIcon />
					Copy as Markdown
				</>
			)}
		</button>
	);
}

function CopyIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}
