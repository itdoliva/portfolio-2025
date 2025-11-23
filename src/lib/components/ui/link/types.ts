import type { HTMLAttributes } from 'svelte/elements';

export type LinkProps = {
	href?: string;
	target?: string;
} & HTMLAttributes<HTMLAnchorElement>;
