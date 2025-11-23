<script lang="ts">
	import ProjectHeader from '$lib/components/composed/project-header/ProjectHeader.svelte';
	import Stack from '$lib/components/layout/stack/Stack.svelte';

	let { data } = $props();
</script>

<ProjectHeader project={data.latestProjectData} />

<Stack class="*:border-b *:border-b-gray-light" spacing="none">
	<data.ProjectPage />
</Stack>
