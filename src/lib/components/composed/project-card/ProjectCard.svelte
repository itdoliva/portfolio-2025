<script lang="ts">
	import NewTab from '$lib/assets/NewTab.svelte';
	import Box from '$lib/components/layout/box/Box.svelte';
	import Frame from '$lib/components/layout/frame/Frame.svelte';
	import type { ProjectData } from '$lib/types/project.types';

	let { slug, title }: ProjectData = $props();
</script>

<Box padding="sm">
	<a href="/{slug}" class="group relative" {title}>
		<Frame aspectRatio="4/3" bordered>
			<img
				src="/project-media/{slug}/thumbnail.webp"
				alt={title}
				class="transition-transform duration-300 ease-out group-hover:scale-[1.00875]"
			/>

			<div
				aria-hidden="true"
				class={[
					'absolute top-0 left-0 h-full w-full overflow-hidden',
					'transition-colors duration-300 ease-out',
					'bg-gray-lightest/0 group-hover:bg-gray-lightest/30'
				]}
			>
				<figure
					class="absolute top-4 right-4 w-3 fill-black opacity-0 mix-blend-multiply transition-opacity duration-300 ease-out group-hover:opacity-80"
				>
					<NewTab />
				</figure>
			</div>
		</Frame>
	</a>
</Box>
