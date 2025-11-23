import type { AspectRatio } from '$lib/components/design-tokens/types';
import type { ClassValue } from 'svelte/elements';

export type VideoProps = {
	title: string;
	videoId: string;
	maxWidth?: string;
	aspectRatio?: AspectRatio;
	width?: string | number;
	height?: string | number;
	class?: ClassValue;
};
