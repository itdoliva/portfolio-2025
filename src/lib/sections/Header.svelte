<script>
  import { page } from '$app/state';

	import Logo from "$lib/assets/Logo.svelte";

  let isAbout = $derived(page.url.pathname === '/about');

  $inspect(page.url.pathname)
</script>

<header class="border-b border-b-gray-light flex justify-between">
  <figure class="ml-4 md:ml-9 my-3 md:my-3 h-3 md:h-5">
    <a href='/' aria-label="Go to Homepage" title='Homepage'>
      <Logo />
    </a>
  </figure>

  <nav class="flex font-satoshi text-gray nav-label">
    <ul class="flex items-stretch *:border-l *:border-l-gray-light *:px-4 *:flex">
      <li class="{isAbout ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} ">
        {#if isAbout}
          <span class="flex items-center pointer-events-none">About</span>
        {:else}
          <a href="/about" class="flex items-center">About</a>
        {/if}
      </li>
    </ul>
  </nav>
</header>