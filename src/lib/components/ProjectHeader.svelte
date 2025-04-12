<script>
  import { onMount } from "svelte";
  import { currentProject } from "$lib/stores/global";

  import NewTab from "$lib/assets/NewTab.svelte";
  import Star from "$lib/assets/Star.svelte";

  let hasURL = $derived(!!$currentProject.url)

  let wrapper = $state(null)
  let container = $state(null)

  let outerRect = $state([0, 0, 0, 0])
  let innerRect = $state([0, 0, 0, 0])

  let hovering = $state(false);
  let pointerPos = $state([0, 0])

  onMount(() => {
    updateRects()
  })

  function getRectArray(el) {
    const rect = el.getBoundingClientRect();
    return [rect.left, rect.top, rect.width, rect.height];
  }

  function updateRects() {
    if (!hasURL || !wrapper || !container) return;
    outerRect = getRectArray(wrapper);
    innerRect = getRectArray(container);
  }

  function onMouseEnter() {
    if (window.innerWidth <= 768) return
    hovering = true;
  }

  function onMouseLeave() {
    hovering = false;
  }

  function onMouseMove(e) {
    if (!hasURL) return;
    pointerPos = [e.clientX, e.clientY];
    updateRects();
  }
</script>


<section
  bind:this={wrapper}
  class="sticky top-0 border-b border-b-gray-light group hpad bg-white"
  role="button"
  tabindex="-1"
  onmousemove={onMouseMove}
>
  {#if hasURL}
    <a
      target="_blank"
      href={$currentProject.url}
      class="absolute top-0 left-0 w-full h-full z-10 overflow-hidden hover:cursor-none {hovering ? 'bg-blue' : ''}"
      ontouchstart={e => e.stopPropagation()}
      onmouseenter={onMouseEnter}
      onmouseleave={onMouseLeave}
    >
    
      <div class="{hovering ? 'flex' : 'hidden'} absolute fill-black z-10 -translate-x-1/2 -translate-y-1/2"
        style:left={pointerPos[0] - outerRect[0] + "px"}
        style:top={pointerPos[1] - outerRect[1] + "px"}
      >
        <div class="flex items-center">
          <figure class="w-24">
            <NewTab />
          </figure>
        </div>
      </div>

    </a>

  {/if}

  <div bind:this={container} class="wide-container vpad relative z-20 pointer-events-none flex justify-between">
    <div class="flex flex-col gap-1.5 md:gap-0.5 {hasURL ? 'mr-12' : ''}">

      <h2 class="flex items-center gap-px md:gap-1 font-light {hovering ? 'text-white' : 'text-black'}">

        <figure class="w-6 md:w-9 {hovering ? 'fill-white heartbeat' : 'fill-black'}">
          <Star />
        </figure>
        
        {$currentProject.title}

      </h2>

      {#if $currentProject.client || $currentProject.date}
        <h3 class="italic font-normal {hovering ? 'text-gray-light' : 'text-gray'}">
          {#if $currentProject.client && $currentProject.client.url}
            <a href={$currentProject.client.url} target="_blank" class="pointer-events-auto hover:underline underline-offset-2">
              {$currentProject.client.name}
            </a>
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

    {#if hasURL && !hovering}
      <div class="flex fill-black">
        <div class="flex items-center">
          <figure class="w-4">
            <NewTab />
          </figure>
        </div>
      </div>
    {/if}

  </div>
</section>
