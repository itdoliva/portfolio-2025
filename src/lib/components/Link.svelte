<script>
	import EnclosedNewTab from "$lib/assets/EnclosedNewTab.svelte";
  import { download } from "$lib/utils/helpers"

  let { children, href, filename } = $props()
</script>

{#if children}
  <a {href} target="_blank" class="group">
    <figure class="group flex items-end gap-2">
      <figcaption class="link-underlined font-medium m-0 p-0">
        {@render children()}
      </figcaption>

      <div class="w-3.5 fill-gray-light">
        <EnclosedNewTab />
      </div>
    </figure>
  </a>
{/if}


<style>
  .link-underlined {
  position: relative;
  display: inline-block;
  line-height: 100%;
  color: rgb(var(--color-gray));
  border: none;
  cursor: pointer;
}

.link-underlined:before {
  content: "";
  position: absolute;
  bottom: -.3em;
  left: 0;
  width: 100%;
  height: 2px;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, var(--color-black) 50%, var(--color-gray-light) 50%);
  background-size: 220% 100%;
  background-position: 100% 50%;
  transition: .3s ease-out;
}

a:hover .link-underlined:before {
  background-position: 0 50%;
}
</style>