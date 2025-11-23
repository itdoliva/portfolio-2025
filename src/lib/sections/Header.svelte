<script>
	import { page } from '$app/state';

	import Logo from '$lib/assets/Logo.svelte';
	import Label from '$lib/components/typography/label/Label.svelte';
	import Link from '$lib/components/ui/link/Link.svelte';

	let isAbout = $derived(page.url.pathname === '/about');
</script>

<header class="flex justify-between border-b border-b-gray-light">
	<figure class="my-3 ml-4 h-4 md:my-3 md:ml-9 md:h-5">
		<a href="/" aria-label="Go to Homepage" title="Homepage">
			<Logo />
		</a>
	</figure>

	<nav class="nav-label flex font-satoshi text-gray">
		<ul class="flex items-stretch *:flex *:border-l *:border-l-gray-light *:px-4">
			<li
				class={[
					'flex items-center',
					isAbout && 'bg-black text-white',
					!isAbout && 'hover:bg-black hover:text-white'
				]}
			>
				{#if isAbout}
					<Label>About</Label>
				{:else}
					<Link href="/about" target="_self"><Label>About</Label></Link>
				{/if}
			</li>
		</ul>
	</nav>
</header>
