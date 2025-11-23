import type { ProjectData, ProjectFileMetadata } from '$lib/types/project.types';
import { makeProject } from '$lib/utils/project-utils';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load: LayoutLoad = async ({ route }) => {
	const files = import.meta.glob<true, string, ProjectFileMetadata>(
		'/src/routes/\\(project\\)/**/+page.svx',
		{
			import: 'metadata',
			eager: true
		}
	);

	const projectsData: ProjectData[] = [];

	Object.entries(files).forEach(([path, metadata]) => {
		if (metadata.hide) return;

		try {
			const project = makeProject(path, metadata);
			projectsData.push(project);
		} catch (e) {
			console.error('Failed to load project.', path, e);
			return;
		}
	});

	projectsData.sort((a, b) => b.date.getTime() - a.date.getTime());

	return {
		route: route.id,
		projectsData
	};
};
