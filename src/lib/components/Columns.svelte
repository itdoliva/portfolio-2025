<script>
	import Box from "$lib/layouts/Box.svelte";
	import Switcher from "$lib/layouts/Switcher.svelte";


  let { children } = $props()

  let width = $state(0)
</script>  


  <Switcher>
    {@render children?.()}
  </Switcher>
