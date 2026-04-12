import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	trailingSlash: false,
	async redirects() {
		return [
			{
				source: "/mcp-aws/:path*",
				destination: "/azure",
				permanent: true,
			},
			{
				source: "/mcp-aws",
				destination: "/azure",
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/:path*.mdx",
				destination: "/llms.mdx/:path*",
			},
		];
	},
};

export default withMDX(config);
