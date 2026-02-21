import { source } from "@/lib/source";
import {
	DocsPage,
	DocsBody,
	DocsDescription,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { LLMCopyButton } from "@/components/llm-copy-button";
import { getGithubLastEdit } from "fumadocs-core/content/github";

const GITHUB_OWNER = "tylergibbs1";
const GITHUB_REPO = "stratus-docs";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	const MDX = page.data.body;

	const lastModified = await getGithubLastEdit({
		owner: GITHUB_OWNER,
		repo: GITHUB_REPO,
		path: `content/docs/${page.path}`,
	});

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			lastUpdate={lastModified ?? undefined}
			editOnGithub={{
				owner: GITHUB_OWNER,
				repo: GITHUB_REPO,
				path: `content/docs/${page.path}`,
			}}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<div className="flex flex-row items-center gap-2 border-b pb-4">
				<LLMCopyButton markdownUrl={`${page.url}.mdx`} />
			</div>
			<DocsBody>
				<MDX components={getMDXComponents()} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	};
}
