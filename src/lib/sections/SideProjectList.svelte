<script lang="ts">
	import ProjectCard from '$lib/components/composed/project-card/ProjectCard.svelte';
	import Stack from '$lib/components/layout/stack/Stack.svelte';
	import type { ProjectData } from '$lib/types/project.types';

	let { projectsData }: { projectsData: ProjectData[] } = $props();

	let width = $state(0);
	let height = $state(0);
</script>

<svelte:window bind:innerHeight={height} />

<aside bind:clientWidth={width} class="-mb-24 border-r border-r-gray-light">
	<div
		class="fixed top-0 left-0 overflow-auto"
		style:width={width + 'px'}
		style:height={height + 'px'}
	>
		<Stack as="ul" bordered spacing="none">
			{#each projectsData as projectData (projectData.slug)}
				<li>
					<ProjectCard {...projectData} />
				</li>
			{/each}
		</Stack>
	</div>
</aside>
