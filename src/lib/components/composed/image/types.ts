import type { ClassValue } from 'svelte/elements';

export type ImageProps = {
	srcset: Array<{ href: string; width: number; height: number }>;
	alt?: string;
	class?: ClassValue;
};
