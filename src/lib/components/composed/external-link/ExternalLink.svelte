<script lang="ts">
	import Link from '$lib/components/ui/link/Link.svelte';
	import Cluster from '$lib/components/layout/cluster/Cluster.svelte';
	import EnclosedNewTab from '$lib/assets/EnclosedNewTab.svelte';
	import type { LinkProps } from '$lib/components/ui/link/types';

	let { children, class: className, ...props }: LinkProps = $props();
</script>

<Link class={['group', className]} {...props}>
	<Cluster gap="sm" class="inline-flex">
		<span
			class={[
				'm-0 p-0 font-medium',
				'relative inline-block leading-none',
				'cursor-pointer border-0',

				"before:absolute before:content-['']",
				'before:bottom-[-.3em] before:left-0 before:h-0.5 before:w-full',
				'before:bg-no-repeat',
				'before:bg-[linear-gradient(to_right,var(--color-black)_50%,var(--color-gray-light)_50%)]',
				'before:bg-size-[220%_100%]',
				'before:bg-position-[100%_50%]',
				'before:transition-[background-position_0.3s_ease-out]',

				'group-hover:before:bg-position-[0%_50%]'
			]}
		>
			{@render children?.()}
		</span>

		<div class="size-3 fill-gray-light">
			<EnclosedNewTab />
		</div>
	</Cluster>
</Link>
