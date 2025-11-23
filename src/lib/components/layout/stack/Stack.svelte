<script lang="ts">
	import { VerticalSpacingClasses } from '$lib/components/design-tokens/spacing';
	import type { StackProps } from './types';

	let {
		as = 'div',
		spacing = 'md',
		bordered = false,
		children,

		class: className,
		...props
	}: StackProps = $props();
</script>

<svelte:element
	this={as}
	class={[
		'flex flex-col justify-start',
		'*:my-0',
		VerticalSpacingClasses[spacing],
		bordered && '*:border-b *:border-b-gray-light',
		className
	]}
	{...props}
>
	{@render children?.()}
</svelte:element>
