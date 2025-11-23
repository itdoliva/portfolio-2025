import type { HTMLAttributes } from 'svelte/elements';
import type { OptionalSizeVariant } from '$lib/components/design-tokens/types';

export type SidebarProps = {
	gap?: OptionalSizeVariant;
	rightSide?: boolean;
	sideWidth?: string;
	sideMinWidth?: string;
	sideMaxWidth?: string;
	contentMinWidth?: string;
} & HTMLAttributes<HTMLDivElement>;
