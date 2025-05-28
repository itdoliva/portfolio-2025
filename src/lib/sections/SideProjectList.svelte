<script>
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Stack from "$lib/layouts/Stack.svelte";
  import { projects } from "$lib/stores/global";

  let width = $state(0)
  let height = $state(0)

</script>

<svelte:window bind:innerHeight={height} />


<aside bind:clientWidth={width} class="-mb-24 border-r border-r-gray-light">
  <div class="fixed top-0 left-0 overflow-auto" style:width={width + 'px'} style:height={height + 'px'}>

    <Stack element="ul" borderWidth="1">

      {#each $projects as project}
        <ProjectCard {project} />
      {/each}

    </Stack>

  </div>
</aside>