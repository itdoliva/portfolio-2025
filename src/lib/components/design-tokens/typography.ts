import type { FontWeightVariant, SizeVariant, TextAlignVariant } from './types';

export const fontWeightClasses: Record<FontWeightVariant, string> = {
	light: 'font-light',
	regular: 'font-normal',
	medium: 'font-medium',
	bold: 'font-bold'
};

export const textAlignClasses: Record<TextAlignVariant, string> = {
	none: '',
	left: 'text-left',
	center: 'text-center',
	right: 'text-right'
};

export const headlineSizeClasses: Record<SizeVariant, string> = {
	lg: 'text-[1.6rem] leading-[1.75rem]',
	md: 'text-[1.4rem] leading-[1.6rem]',
	sm: 'text-[1.2rem] leading-[1.4rem]'
};

export const titleSizeClasses: Record<SizeVariant, string> = {
	lg: 'text-[1.375rem] leading-[1.6rem] tracking-normal',
	md: 'text-[1rem] leading-[1.4rem] tracking-normal',
	sm: 'text-[0.875rem] leading-[1.2rem] tracking-normal'
};

export const paragraphSizeClasses: Record<SizeVariant, string> = {
	lg: 'text-[1rem] leading-[1.4rem] tracking-normal',
	md: 'text-[0.875rem] leading-[1.2rem] tracking-normal',
	sm: 'text-[0.75rem] leading-[1.1rem] tracking-normal'
};

export const labelSizeClasses: Record<SizeVariant, string> = {
	lg: 'text-[0.8rem] leading-[1.25rem] tracking-[0.01rem]',
	md: 'text-[0.74rem] leading-[1rem] tracking-normal',
	sm: 'text-[0.6875rem] leading-[1rem] tracking-normal'
};
