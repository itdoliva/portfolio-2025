import type {
	FontWeightVariant,
	SizeVariant,
	TextAlignVariant
} from '$lib/components/design-tokens/types';
import type { HTMLAttributes } from 'svelte/elements';

export type ParagraphProps = {
	size?: SizeVariant;
	weight?: FontWeightVariant;
	align?: TextAlignVariant;
} & HTMLAttributes<HTMLParagraphElement>;
