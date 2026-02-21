import { source } from "@/lib/source";
import {
	DocsPage,
	DocsBody,
	DocsDescription,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { LLMCopyButton } from "@/components/llm-copy-button";
import { getGithubLastEdit } from "fumadocs-core/content/github";

const mdxComponents = {
	...defaultMdxComponents,
	Callout,
	Card,
	Cards,
	Tab,
	Tabs,
	Step,
	Steps,
	File,
	Folder,
	Files,
	Accordion,
	Accordions,
};

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
				<MDX components={mdxComponents} />
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
