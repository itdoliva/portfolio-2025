import type {
	FontWeightVariant,
	SizeVariant,
	TextAlignVariant
} from '$lib/components/design-tokens/types';
import type { HTMLAttributes } from 'svelte/elements';

export type LabelProps = {
	size?: SizeVariant;
	weight?: FontWeightVariant;
	align?: TextAlignVariant;
} & HTMLAttributes<HTMLSpanElement>;
