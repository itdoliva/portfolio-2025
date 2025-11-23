<script lang="ts">
	import Frame from '$lib/components/layout/frame/Frame.svelte';
	import type { VideoProps } from './types';

	let {
		title,
		videoId,
		width = '1024',
		height = '1024',
		aspectRatio = 'auto',
		class: className
	}: VideoProps = $props();

	const parameters = new URLSearchParams({
		autoplay: '1',
		playlist: videoId,
		loop: '1',
		disablekb: '1',
		controls: '0',
		fs: '0'
	});
</script>

<Frame {aspectRatio} bordered class={className}>
	<iframe
		{title}
		{width}
		{height}
		src="https://www.youtube.com/embed/{videoId}?{parameters.toString()}"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
		class="bg-black"
	></iframe>
</Frame>
