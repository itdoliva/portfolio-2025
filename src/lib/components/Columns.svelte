<script>
	import Box from "$lib/components/layout/box/Box.svelte";
	import Switcher from "$lib/components/layout/switcher/Switcher.svelte";


  let { children } = $props()

  let width = $state(0)
</script>  


  <Switcher>
    {@render children?.()}
  </Switcher>
