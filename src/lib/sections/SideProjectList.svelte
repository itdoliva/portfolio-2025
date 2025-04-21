<script>
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Stack from "$lib/layouts/Stack.svelte";
  import { projects } from "$lib/stores/global";

  let width = $state(0)
</script>

<aside bind:clientWidth={width}>
  <div class="fixed top-0 left-0 h-svh border-r border-r-gray-light overflow-auto" style:width={width + 'px'}>

    <Stack element="ul" borderWidth="1">

      {#each $projects as project}
        <ProjectCard {project} />
      {/each}

    </Stack>

  </div>
</aside>