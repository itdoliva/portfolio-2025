<script lang="ts">
	import ProjectHeader from '$lib/components/composed/project-header/ProjectHeader.svelte';
	import Stack from '$lib/components/layout/stack/Stack.svelte';

	let { data, children } = $props();
</script>

{#if data.projectData}
	<ProjectHeader project={data.projectData} />
{/if}

<Stack class="*:border-b *:border-b-gray-light" spacing="none">
	{@render children?.()}
</Stack>
