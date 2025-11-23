<script lang="ts">
	import { AspectRatioClasses } from '$lib/components/design-tokens/aspect-ratio';
	import type { FrameProps } from './types';

	let {
		children,
		aspectRatio = 'auto',
		bordered = false,
		class: className,
		...props
	}: FrameProps = $props();
</script>

<figure
	class={[
		'flex items-center justify-center overflow-hidden',
		'[&>img]:h-full [&>img]:w-full [&>img]:object-cover',
		'[&>video]:h-full [&>video]:w-full [&>video]:object-cover',
		bordered && 'rounded-xl border border-gray',
		AspectRatioClasses[aspectRatio],
		className
	]}
	{...props}
>
	{@render children?.()}
</figure>
