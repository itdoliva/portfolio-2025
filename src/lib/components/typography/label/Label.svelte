<script lang="ts">
	import {
		fontWeightClasses,
		labelSizeClasses,
		textAlignClasses
	} from '$lib/components/design-tokens/typography';
	import type { LabelProps } from './types';

	let {
		size = 'md',
		weight = 'regular',
		align = 'left',
		children,
		class: className,
		...props
	}: LabelProps = $props();
</script>

<p
	class={[
		'font-satoshi',
		labelSizeClasses[size],
		fontWeightClasses[weight],
		textAlignClasses[align],
		className
	]}
	{...props}
>
	{@render children?.()}
</p>
