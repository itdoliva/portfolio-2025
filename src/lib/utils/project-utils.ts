import type { ProjectData, ProjectFileMetadata } from '$lib/types/project.types';

export const extractSlug = (path: string): string | null => {
	const slugMatch = path.match(/\/([^/]+)\/[^/]+\.svx$/);
	return slugMatch ? slugMatch[1] : null;
};

export const makeProject = (path: string, metadata: ProjectFileMetadata): ProjectData => {
	const slug = extractSlug(path);

	if (!slug) {
		throw new Error(`Invalid project path: ${path}`);
	}

	const { date, ...otherMetadata } = metadata;

	return {
		slug,
		date: new Date(date),
		...otherMetadata
	};
};
