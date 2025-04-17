<script>
	import Box from "$lib/layouts/Box.svelte";
	import Center from "$lib/layouts/Center.svelte";

  let { children } = $props()

  let outerWidth = $state(0)
  let innerWidth = $state(0)
</script>


<div bind:clientWidth={outerWidth}>
  <div class="center-l {outerWidth > innerWidth + 2 ? 'border-l border-r border-l-gray-light border-r-gray-light' : ''}" bind:clientWidth={innerWidth}>

    <div class="grid grid-rows-[minmax(0,1fr)_min-content_minmax(0,1fr)_min-content_minmax(0,1fr)_min-content_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_min-content_minmax(0,1fr)] md:grid-rows-[minmax(0,1fr)_min-content_minmax(0,1fr)] ">

      {@render children?.()}

      <hr class="hidden md:block row-start-1 col-start-2 h-full w-px bg-gray-light border-0" />
      <hr class="hidden md:block row-start-2 col-span-3 w-full h-px bg-gray-light border-0" />
      <hr class="hidden md:block row-start-3 col-start-2 h-full w-px bg-gray-light border-0" />
      
      <hr class="block md:hidden row-start-2 h-px bg-gray-light border-0" />
      <hr class="block md:hidden row-start-4 h-px bg-gray-light border-0" />
      <hr class="block md:hidden row-start-6 h-px bg-gray-light border-0" />

    </div>

  </div>

</div>