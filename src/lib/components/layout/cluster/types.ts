import type {
	AlignItems,
	JustifyContent,
	OptionalSizeVariant
} from '$lib/components/design-tokens/types';
import type { DivLikeElement } from '$lib/types/props.types';
import type { HTMLAttributes } from 'svelte/elements';

export type ClusterProps = {
	as?: DivLikeElement;
	gap?: OptionalSizeVariant;
	hGap?: OptionalSizeVariant;
	vGap?: OptionalSizeVariant;
	align?: AlignItems;
	justify?: JustifyContent;
	nowrap?: boolean;
} & HTMLAttributes<HTMLDivElement>;
