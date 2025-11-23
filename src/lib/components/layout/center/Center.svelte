<script lang="ts">
	import { MaxWidthClasses } from '$lib/components/design-tokens/dimensions';
	import type { CenterProps } from './types';

	let {
		as = 'div',
		maxWidth = 'lg',
		children,
		intrinsic = false,
		class: className,
		...props
	}: CenterProps = $props();
</script>

<svelte:element
	this={as}
	class={[
		'mx-auto',
		MaxWidthClasses[maxWidth],
		intrinsic && 'flex flex-col items-center justify-center',
		className
	]}
	{...props}
>
	{@render children?.()}
</svelte:element>
