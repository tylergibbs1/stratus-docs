import defaultMdxComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
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
		...components,
	};
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
	return getMDXComponents(components);
}
