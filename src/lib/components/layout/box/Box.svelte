<script lang="ts">
	import { PaddingClasses } from "$lib/components/design-tokens/spacing";
	import type { BoxProps } from "./types";

  let { 
    as = 'div',
    padding = "md", 
    class: className,
    rounded = false,
    bordered = false,
    children, 
    ...props
  }: BoxProps = $props()
</script>

<svelte:element 
  this={as} 
  class={[
    PaddingClasses[padding],
    rounded && 'rounded-sm md:rounded-lg',
    bordered && 'border border-gray',
    className
  ]}
  {...props}
>
  {@render children?.()}
</svelte:element>
