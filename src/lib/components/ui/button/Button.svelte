<script lang="ts">
	import type { ButtonProps } from './types';

	let { children, ...props }: ButtonProps = $props();
</script>

<button {...props}>
	{@render children?.()}
</button>
