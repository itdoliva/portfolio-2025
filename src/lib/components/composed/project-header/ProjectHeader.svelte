<script lang="ts">
	import { onMount } from 'svelte';

	import NewTab from '$lib/assets/NewTab.svelte';
	import Star from '$lib/assets/Star.svelte';
	import Box from '../../layout/box/Box.svelte';
	import Center from '../../layout/center/Center.svelte';
	import Stack from '../../layout/stack/Stack.svelte';
	import Cluster from '../../layout/cluster/Cluster.svelte';
	import Headline from '../../typography/headline/Headline.svelte';
	import Title from '../../typography/title/Title.svelte';
	import type { ProjectHeaderProps } from './types';

	let { project }: ProjectHeaderProps = $props();

	let hasURL = $derived(Boolean(project.url));

	let wrapper = $state<HTMLElement | null>(null);
	let container = $state<HTMLElement | null>(null);

	let outerRect = $state([0, 0, 0, 0]);
	let innerRect = $state([0, 0, 0, 0]);

	let hovering = $state(false);
	let pointerPos = $state([0, 0]);

	onMount(() => {
		updateRects();
	});

	const getRectArray = (el: HTMLElement) => {
		const rect = el.getBoundingClientRect();
		return [rect.left, rect.top, rect.width, rect.height];
	};

	const updateRects = () => {
		if (!hasURL || !wrapper || !container) return;
		outerRect = getRectArray(wrapper);
		innerRect = getRectArray(container);
	};

	const onMouseEnter = () => {
		if (window.innerWidth <= 768) return;
		hovering = true;
	};

	const onMouseLeave = () => {
		hovering = false;
	};

	const onMouseMove = (e: MouseEvent) => {
		if (!hasURL) return;
		pointerPos = [e.clientX, e.clientY];
		updateRects();
	};
</script>

<section
	bind:this={wrapper}
	class="group sticky top-0 border-b border-b-gray-light bg-white"
	role="button"
	tabindex="-1"
	onmousemove={onMouseMove}
>
	{#if hasURL}
		<a
			target="_blank"
			href={project.url}
			class={[
				'absolute top-0 left-0 z-10 h-full w-full',
				'overflow-hidden hover:cursor-none',
				hovering && 'bg-blue'
			]}
			ontouchstart={(e) => e.stopPropagation()}
			onmouseenter={onMouseEnter}
			onmouseleave={onMouseLeave}
		>
			<div
				class={[
					'absolute z-10 -translate-1/2 fill-black',
					hovering && 'flex',
					!hovering && 'hidden'
				]}
				style:left={pointerPos[0] - outerRect[0] + 'px'}
				style:top={pointerPos[1] - outerRect[1] + 'px'}
			>
				<div class="flex items-center">
					<figure class="size-24">
						<NewTab />
					</figure>
				</div>
			</div>
		</a>
	{/if}

	<div bind:this={container} class="pointer-events-none relative z-20">
		<Center>
			<Box class="flex justify-between">
				<Stack spacing="sm">
					<Cluster gap="sm" align="center" nowrap>
						<figure
							class={['w-6 md:w-9', hovering && 'heartbeat fill-white', !hovering && 'fill-black']}
						>
							<Star />
						</figure>

						<Headline class={[hovering && 'text-white', !hovering && 'text-black']}>
							{project.title}
						</Headline>
					</Cluster>

					{#if project.client || project.date}
						<Title class={['italic', hovering && 'text-gray-light', !hovering && 'text-gray']}>
							{#if project.client && project.client.url}
								<a
									href={project.client.url}
									target="_blank"
									class="pointer-events-auto underline-offset-2 hover:underline"
								>
									{project.client.name}
								</a>
							{:else if project.client}
								<span>{project.client.name}</span>
							{/if}

							{#if project.client && project.date}
								—
							{/if}

							{#if project.date}
								{project.date.getFullYear()}
							{/if}
						</Title>
					{/if}
				</Stack>

				{#if hasURL && !hovering}
					<div class="flex">
						<div class="flex items-center">
							<figure class="size-6 fill-black">
								<NewTab />
							</figure>
						</div>
					</div>
				{/if}
			</Box>
		</Center>
	</div>
</section>
