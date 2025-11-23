<script lang="ts">
	import {
		fontWeightClasses,
		titleSizeClasses,
		textAlignClasses
	} from '$lib/components/design-tokens/typography';
	import type { ParagraphProps } from './types';

	let {
		size = 'md',
		weight = 'regular',
		align = 'left',
		children,
		class: className,
		...props
	}: ParagraphProps = $props();
</script>

<p
	class={[
		'font-overlock',
		titleSizeClasses[size],
		fontWeightClasses[weight],
		textAlignClasses[align],
		className
	]}
	{...props}
>
	{@render children?.()}
</p>
