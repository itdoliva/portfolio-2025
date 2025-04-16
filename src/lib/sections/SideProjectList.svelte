<script>
	import Box from "$lib/layouts/Box.svelte";
	import Frame from "$lib/layouts/Frame.svelte";
	import Stack from "$lib/layouts/Stack.svelte";
  import { projects } from "$lib/stores/global";

  let width = $state(0)
</script>

<aside bind:clientWidth={width}>
  <div class="fixed top-0 left-0 h-svh border-r border-r-gray-light overflow-auto" style:width={width + 'px'}>

    <Stack element="ul" borderWidth="1">

      {#each $projects as project}
        <Box element="li" padding="small">
          <a href="/{project.slug}">
            <Frame aspectRatio="4/3">
              <img src="/project-media/{project.slug}/thumbnail.webp" alt={project.name}/>
            </Frame>
          </a>
        </Box>
      {/each}

    </Stack>

  </div>
</aside>