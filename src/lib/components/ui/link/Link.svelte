<script lang="ts">
	import type { LinkProps } from './types';

	let { children, class: className, target = '_blank', ...props }: LinkProps = $props();
</script>

<a {target} class={[className]} {...props}>
	{@render children?.()}
</a>
