<script>
	import Center from '../center/Center.svelte';

	let { children } = $props();

	let outerWidth = $state(0);
	let innerWidth = $state(0);
</script>

<div bind:clientWidth={outerWidth}>
	<Center>
		<div
			class={outerWidth > innerWidth + 2
				? 'border-r border-l border-r-gray-light border-l-gray-light'
				: ''}
			bind:clientWidth={innerWidth}
		>
			<div class="grid md:grid-cols-[minmax(0,1fr)_min-content_minmax(0,1fr)]">
				{@render children?.()}

				<hr class="col-start-2 row-start-1 hidden h-full w-px border-0 bg-gray-light md:block" />
				<hr class="row-start-2 block h-px border-0 bg-gray-light md:hidden" />
			</div>
		</div>
	</Center>
</div>
