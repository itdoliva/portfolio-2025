import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load: LayoutLoad = async ({ route, parent }) => {
	const slug = route.id.split('/').pop();
	const { projectsData } = await parent();
	const projectData = projectsData.find((d) => d.slug === slug);

	return {
		projectData
	};
};
