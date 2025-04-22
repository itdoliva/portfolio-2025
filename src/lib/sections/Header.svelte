<script>

	import Logo from "$lib/assets/Logo.svelte";

</script>

<header class="border-b border-b-gray-light flex justify-between">
  <figure class="ml-4 md:ml-9 my-3 md:my-3 h-3 md:h-5">
    <a href='/' aria-label="Go to Homepage" title='Homepage'>
      <Logo />
    </a>
  </figure>

  <nav class="flex font-satoshi text-gray nav-label">
    <ul class="flex items-stretch *:border-l *:border-l-gray-light *:px-4 *:flex">
      <li>
        <a href="/about" class="flex items-center">About</a>
      </li>
      <!-- <li>
        <a href="/contact" class="flex items-center">Email</a>
      </li> -->
    </ul>
  </nav>
</header>