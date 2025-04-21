<script>
	import NewTab from "$lib/assets/NewTab.svelte";
	import Box from "$lib/layouts/Box.svelte";
	import Frame from "$lib/layouts/Frame.svelte";

  let { project } = $props()
</script>


<Box element="li" padding="small">
  <a href="/{project.slug}" class="relative group" title="{project.title}">
    <Frame aspectRatio="4/3">
      <img src="/project-media/{project.slug}/thumbnail.webp" alt={project.title} class="group-hover:scale-[1.00875] transition-transform duration-300 ease-out"/>

      <div aria-hidden="true" class="absolute top-0 left-0 w-full h-full bg-gray-lightest/0 group-hover:bg-gray-lightest/30 transition-colors duration-300 ease-out overflow-hidden">
        <figure class="absolute top-4 right-4 w-3 opacity-0 group-hover:opacity-80  transition-opacity duration-300 ease-out fill-black mix-blend-multiply">
          <NewTab />
        </figure>
      </div>
    </Frame>
  </a>
</Box>