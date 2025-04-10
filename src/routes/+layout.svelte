<script>
	import '../app.css';
	
	let { children, data } = $props();
</script>

<main class="grid grid-cols-5">

	<aside class="col-start-1 col-span-1 h-dvh relative border-r border-r-gray-light overflow-auto">

		<ul class="absolute top-0 left-0 w-full h-full flex flex-col">

			{#each data.projects as project}
				<li class="p-1 md:p-3">
					<a href="#">
						<figure class="relative w-full h-0 pb-[55%] rounded-lg overflow-hidden border border-gray">
							<img src={project.image} alt={project.name} class="absolute top-0 left-0 w-full h-full  aspect-square bg-gray-light"/>
						</figure>
					</a>
				</li>
				<hr class="border-gray-light"/>
			{/each}
		</ul>

	</aside>

	<section class="col-span-4">
		{@render children()}
	</section>

</main>
