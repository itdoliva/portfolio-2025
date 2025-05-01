<script>
	import '../app.css';
	import SideProjectList from '$lib/sections/SideProjectList.svelte';
	import Header from '$lib/sections/Header.svelte';
	import { projects, currentProject } from '$lib/stores/global';
	import ProjectView from '$lib/sections/ProjectView.svelte';
	import Sidebar from '$lib/layouts/Sidebar.svelte';
	import Stack from '$lib/layouts/Stack.svelte';
	import { browser } from '$app/environment';
	
	let { children, data } = $props();

	let HomeProjectContent = $derived(data.route === '/' && $currentProject.Content)

	if (browser) {
		window.dataLayer = window.dataLayer || []
		window.gtag = function gtag() { 
			window.dataLayer.push(arguments) 
		}
		window.gtag('js', new Date())
		window.gtag('config', 'G-CJBPZ3FWP0')
	}

</script>

<svelte:head>
	<title>Italo&#8201;Doliva</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-CJBPZ3FWP0"></script>
</svelte:head>

<Sidebar sideOn='left' sideWidth="20%" gapK=0>

	<SideProjectList />

	<div class="relative pb-12 min-h-svh">

		<Header />

		<Stack element="main" borderWidth="1">
			{#if data.route === '/'}
	
				<ProjectView>
					<HomeProjectContent />
				</ProjectView>
	
			{:else if data.route.startsWith('/(project)')}
	
				<ProjectView>
					{@render children()}
				</ProjectView>
	
			{:else}
	
				{@render children()}
	
			{/if}
		</Stack>
	
	</div>

</Sidebar>