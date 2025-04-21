<script>
	import DownloadIcon from "$lib/assets/DownloadIcon.svelte";
  import { download } from "$lib/utils/helpers"

  let { children, href, filename } = $props()
</script>

{#if children}
  <button onclick={() => download(href, filename)} class="group flex items-center gap-2 ">
    <figure class="w-3 fill-black">
      <DownloadIcon />
    </figure>

    <span class="font-medium link-underlined">
      {@render children()}
    </span>

  </button>
{/if}


