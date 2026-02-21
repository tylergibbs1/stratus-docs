import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<div className="flex items-center gap-2.5">
				<svg viewBox="0 0 40 40" width={20} height={20}>
					<polyline
						points="9,22 20,13 31,22"
						fill="none"
						stroke="currentColor"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<polyline
						points="9,30 20,21 31,30"
						fill="none"
						stroke="currentColor"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						opacity="0.4"
					/>
				</svg>
				<span className="font-medium text-[15px] tracking-[-0.03em]">
					stratus
				</span>
			</div>
		),
	},
	githubUrl: "https://github.com/tylergibbs1/stratus",
};
