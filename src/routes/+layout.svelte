<script>
	import '../app.css';
	import SideProjectList from '$lib/sections/SideProjectList.svelte';
	import Header from '$lib/sections/Header.svelte';
	import { projects, currentProject } from '$lib/stores/global';
	import ProjectView from '$lib/sections/ProjectView.svelte';
	import Sidebar from '$lib/layouts/Sidebar.svelte';
	import Stack from '$lib/layouts/Stack.svelte';
	
	let { children, data } = $props();

	let HomeProjectContent = $derived(data.route === '/' && $currentProject.Content)

</script>

<svelte:head>
	<title>Italo&#8201;Doliva</title>
</svelte:head>

<Sidebar sideWidth="20%">

	<SideProjectList />

	<div class="relative pb-12">

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