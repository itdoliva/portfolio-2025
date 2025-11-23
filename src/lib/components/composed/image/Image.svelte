<script lang="ts">
	import Frame from '$lib/components/layout/frame/Frame.svelte';
	import type { ImageProps } from './types';

	let { srcset = [], alt, class: className }: ImageProps = $props();

	let width = $state(0);

	let src = $derived.by(() => {
		if (!srcset.length) {
			return null;
		}

		if (srcset.length === 1) {
			return srcset[0];
		}

		for (let i = 0; i < srcset.length; i++) {
			if (width <= srcset[i].width / window.devicePixelRatio) {
				return srcset[i];
			} else if (i === srcset.length - 1) {
				return srcset[i];
			}
		}
	});
</script>

<div bind:clientWidth={width}>
	{#if src}
		<Frame bordered class={className}>
			<img loading="lazy" src={src.href} {alt} width={src.width} height={src.height} />
		</Frame>
	{/if}
</div>
