<script>
  import { projects } from "$lib/stores/global";
</script>

<section class="relative">
  <ul class="absolute top-0 left-0 w-full h-full flex flex-col">

    {#each $projects as project}
      <li class="p-1 md:p-3">
        <a href="/{project.slug}">
          <figure class="relative w-full h-0 pb-[100%] md:pb-[75%] rounded-lg overflow-hidden border border-gray">
            <img src="/project-media/{project.slug}/thumbnail.webp" alt={project.name} class="absolute top-0 left-0 w-full h-full bg-gray-light object-center object-cover"/>
          </figure>
        </a>
      </li>
      <hr class="border-gray-light"/>
    {/each}
  </ul>
</section>