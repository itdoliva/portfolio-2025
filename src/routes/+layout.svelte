<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import '../app.css';
	import SideProjectList from '$lib/sections/SideProjectList.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Sidebar from '$lib/components/layout/sidebar/Sidebar.svelte';
	import Stack from '$lib/components/layout/stack/Stack.svelte';

	let { children, data } = $props();

	onMount(() => {
		if (!browser) return;
		window.dataLayer = window.dataLayer || [];

		window.gtag = function gtag(...args) {
			window.dataLayer.push(args);
		} as Gtag.Gtag;

		window.gtag('js', new Date());
		window.gtag('config', 'G-CJBPZ3FWP0');
	});
</script>

<svelte:head>
	<title>Italo&#8201;Doliva</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-CJBPZ3FWP0"></script>
</svelte:head>

<Sidebar sideWidth="20%">
	<SideProjectList projectsData={data.projectsData} />

	<div class="relative min-h-svh pb-12">
		<Header />

		<Stack as="main">
			{@render children()}
		</Stack>
	</div>
</Sidebar>
