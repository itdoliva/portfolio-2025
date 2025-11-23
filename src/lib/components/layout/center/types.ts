import type { HTMLAttributes } from 'svelte/elements';
import type { DivLikeElement } from '$lib/types/props.types';
import type { MaxWidth } from '$lib/components/design-tokens/types';

export type CenterProps = {
	as?: DivLikeElement;
	maxWidth?: MaxWidth;
	intrinsic?: boolean;
} & HTMLAttributes<HTMLDivElement>;
