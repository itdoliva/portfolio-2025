<script lang="ts">
	import {
		fontWeightClasses,
		titleSizeClasses,
		textAlignClasses
	} from '$lib/components/design-tokens/typography';
	import type { TitleProps } from './types';

	let {
		as = 'h3',
		size = 'md',
		weight = 'regular',
		align = 'left',
		children,
		class: className,
		...props
	}: TitleProps = $props();
</script>

<svelte:element
	this={as}
	class={[titleSizeClasses[size], fontWeightClasses[weight], textAlignClasses[align], className]}
	{...props}
>
	{@render children?.()}
</svelte:element>
