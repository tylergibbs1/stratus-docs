import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stratus SDK - TypeScript agent SDK for Azure OpenAI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#28261F",
				fontFamily: "Inter, -apple-system, sans-serif",
			}}
		>
			<svg viewBox="0 0 40 40" width={120} height={120}>
				<polyline
					points="9,22 20,13 31,22"
					fill="none"
					stroke="#F7F5EF"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<polyline
					points="9,30 20,21 31,30"
					fill="none"
					stroke="#F7F5EF"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
					opacity="0.4"
				/>
			</svg>
			<div
				style={{
					fontSize: 64,
					fontWeight: 500,
					color: "#F7F5EF",
					letterSpacing: "-0.04em",
					marginTop: 24,
					lineHeight: 1,
				}}
			>
				stratus
			</div>
			<div
				style={{
					fontSize: 20,
					color: "#807458",
					marginTop: 16,
					letterSpacing: "-0.01em",
				}}
			>
				TypeScript agent SDK for Azure OpenAI
			</div>
		</div>,
		{ ...size },
	);
}
