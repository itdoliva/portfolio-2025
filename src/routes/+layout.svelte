<script>
	import '../app.css';
	import SideProjectList from '$lib/sections/SideProjectList.svelte';
	import Header from '$lib/sections/Header.svelte';
	import { projects, currentProject } from '$lib/stores/global';
	import ProjectView from '$lib/sections/ProjectView.svelte';
	
	let { children, data } = $props();

	let HomeProjectContent = $derived(data.route === '/' && $currentProject.Content)

</script>

<svelte:head>
	<title>Italo&#8201;Doliva</title>
</svelte:head>

<div class="grid grid-cols-5 h-dvh overflow-hidden">

	<aside class="col-start-1 col-span-1 relative border-r border-r-gray-light overflow-auto">
		<SideProjectList />
	</aside>

	<section class="col-span-4 relative">

		<div class="absolute top-0 left-0 w-full h-full overflow-auto">

			<Header />

			<main>

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

			</main>

		</div>

	</section>

</div>
