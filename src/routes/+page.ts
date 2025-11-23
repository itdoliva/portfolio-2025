import type { Component } from 'svelte';
import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load: PageLoad = async ({ parent }) => {
	const { projectsData } = await parent();
	const latestProjectData = projectsData[0];

	const files = import.meta.glob<true, string, () => Promise<Component>>(
		'/src/routes/\\(project\\)/**/+page.svx',
		{ import: 'default' }
	);
	const loader = files[`/src/routes/(project)/${latestProjectData.slug}/+page.svx`];
	const ProjectPage = await loader();

	return {
		latestProjectData,
		ProjectPage
	};
};
