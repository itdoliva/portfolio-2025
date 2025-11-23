import type { OptionalSizeVariant } from './types';

export const PaddingClasses: Record<OptionalSizeVariant, string> = {
	none: '',
	sm: 'p-1 md:p-3',
	md: 'p-4 md:p-6',
	lg: 'p-8 md:p-12'
};

export const HorizontalGapClasses: Record<OptionalSizeVariant, string> = {
	none: '',
	sm: 'gap-x-2',
	md: 'gap-x-4',
	lg: 'gap-x-8'
};

export const VerticalGapClasses: Record<OptionalSizeVariant, string> = {
	none: '',
	sm: 'gap-y-2',
	md: 'gap-y-4',
	lg: 'gap-y-8'
};

export const VerticalSpacingClasses: Record<OptionalSizeVariant, string> = {
	none: '',
	sm: '[&>*+*]:mt-2',
	md: '[&>*+*]:mt-4',
	lg: '[&>*+*]:mt-8'
};

export const GapClasses: Record<OptionalSizeVariant, string> = {
	none: '',
	sm: `${HorizontalGapClasses.sm} ${VerticalGapClasses.sm}`,
	md: `${HorizontalGapClasses.md} ${VerticalGapClasses.md}`,
	lg: `${HorizontalGapClasses.lg} ${VerticalGapClasses.lg}`
};
