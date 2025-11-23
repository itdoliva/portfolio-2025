import type {
	FontWeightVariant,
	SizeVariant,
	TextAlignVariant
} from '$lib/components/design-tokens/types';
import type { HeadingElement } from '$lib/types/props.types';
import type { HTMLAttributes } from 'svelte/elements';

export type TitleProps = {
	as?: HeadingElement;
	size?: SizeVariant;
	weight?: FontWeightVariant;
	align?: TextAlignVariant;
} & HTMLAttributes<HTMLHeadingElement>;
