<script lang="ts">
	import {
		fontWeightClasses,
		headlineSizeClasses,
		textAlignClasses
	} from '$lib/components/design-tokens/typography';
	import type { HeadlineProps } from './types';

	let {
		as = 'h1',
		size = 'md',
		weight = 'light',
		align = 'left',
		children,
		class: className,
		...props
	}: HeadlineProps = $props();
</script>

<svelte:element
	this={as}
	class={[headlineSizeClasses[size], fontWeightClasses[weight], textAlignClasses[align], className]}
	{...props}
>
	{@render children?.()}
</svelte:element>
