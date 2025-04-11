<script>
	import NewTab from "$lib/assets/NewTab.svelte";
	import Star from "$lib/assets/Star.svelte";

  import { currentProject } from "$lib/stores/global";
</script>

<section class="border-b border-b-gray-light flex justify-between gap-4 px-4 md:px-9 py-4 md:py-6">

  <div class="flex flex-col">

    <h1 class="flex items-center gap-px md:gap-4 font-light heading-2">
      <figure class="w-5 md:w-9">
        <Star />
      </figure>

      <span>
        {$currentProject.title}
      </span>
    </h1>

    {#if $currentProject.client || $currentProject.date}
      <h3 class="italic text-gray heading-3">

        {#if $currentProject.client && $currentProject.client.url}
          <a href={$currentProject.client.url} target="_blank">{$currentProject.client.name}</a>
        {:else if $currentProject.client}
          <span>{$currentProject.client.name}</span>
        {/if}

        {#if $currentProject.client && $currentProject.date}
          —
        {/if}

        {#if $currentProject.date}
          {$currentProject.date.getFullYear()}
        {/if}
      </h3>
    {/if}

  </div>

  {#if $currentProject.url}
    <a href={$currentProject.url} target="_blank" class="flex">
      <div class="flex items-center">
        <figure class="w-4">
          <NewTab />
        </figure>
      </div>
    </a>
  {/if}

</section>