import type { AspectRatio } from '$lib/components/design-tokens/types';
import type { HTMLAttributes } from 'svelte/elements';

export type FrameProps = {
	aspectRatio?: AspectRatio;
	bordered?: boolean;
} & HTMLAttributes<HTMLElement>;
