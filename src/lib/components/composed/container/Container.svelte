<script lang="ts">
	import Box from '$lib/components/layout/box/Box.svelte';
	import Center from '$lib/components/layout/center/Center.svelte';
	import type { ContainerProps } from './types';

	let { children, intrinsic = false, maxWidth = 'lg', ...boxProps }: ContainerProps = $props();
</script>

<Box {...boxProps}>
	<Center {intrinsic} {maxWidth}>
		{@render children?.()}
	</Center>
</Box>
