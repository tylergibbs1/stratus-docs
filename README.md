# Stratus Docs

Documentation site for [Stratus](https://github.com/tylergibbs/stratus), a TypeScript agent SDK for Azure OpenAI.

Built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/).

## Development

```bash
bun install
bun dev
```

## Build

```bash
bun run build
```

## Structure

```
content/docs/          # MDX documentation pages
  index.mdx            # Introduction
  getting-started.mdx  # Installation + first agent
  agents.mdx           # Agent configuration
  tools.mdx            # Tool definitions + comparison to raw Azure OpenAI
  sessions.mdx         # Multi-turn sessions
  streaming.mdx        # Streaming + abort signals
  structured-output.mdx
  handoffs.mdx
  guardrails.mdx
  hooks.mdx
  tracing.mdx
  errors.mdx
  azure/               # Azure model configuration (Chat Completions + Responses API)
  guides/              # End-to-end example guides
```
