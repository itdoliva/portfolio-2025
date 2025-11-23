<script lang="ts">
	import { HorizontalGapClasses, VerticalGapClasses } from '$lib/components/design-tokens/spacing';
	import type { SwitcherProps } from './types';

	let {
		children,
		as = 'div',
		gap = 'md',
		hGap = gap,
		vGap = gap,
		threshold = '55ch',

		class: className,
		...props
	}: SwitcherProps = $props();
</script>

<svelte:element
	this={as}
	style:--threshold={threshold}
	class={[
		'flex flex-wrap',
		'*:grow *:basis-[calc((var(--threshold)-100%)*999)]',
		HorizontalGapClasses[hGap],
		VerticalGapClasses[vGap],
		className
	]}
	{...props}
>
	{@render children?.()}
</svelte:element>
