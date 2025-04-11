<script>
	import { currentProject } from "$lib/stores/global";

	import ProjectHeader from "$lib/components/ProjectHeader.svelte";

	let { children } = $props();

</script>

{#if $currentProject}
  <article>
    <ProjectHeader />
    {@render children?.()}
  </article>
{/if}