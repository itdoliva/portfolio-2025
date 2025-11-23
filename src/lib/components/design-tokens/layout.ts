import type { AlignItems, JustifyContent } from './types';

export const AlignItemsClasses: Record<AlignItems, string> = {
	center: 'items-center',
	start: 'items-start',
	end: 'items-end',
	baseline: 'items-baseline',
	stretch: 'items-stretch'
};

export const JustifyContentClasses: Record<JustifyContent, string> = {
	center: 'justify-center',
	start: 'justify-start',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};
