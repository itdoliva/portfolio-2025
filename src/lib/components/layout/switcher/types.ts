import type { OptionalSizeVariant } from '$lib/components/design-tokens/types';
import type { DivLikeElement } from '$lib/types/props.types';
import type { HTMLAttributes } from 'svelte/elements';

export type SwitcherProps = {
	as?: DivLikeElement;
	gap?: OptionalSizeVariant;
	hGap?: OptionalSizeVariant;
	vGap?: OptionalSizeVariant;
	threshold?: string;
} & HTMLAttributes<HTMLDivElement>;
