<script lang="ts">
	import { AlignItemsClasses, JustifyContentClasses } from "$lib/components/design-tokens/layout";
	import { HorizontalGapClasses, VerticalGapClasses } from "$lib/components/design-tokens/spacing";
	import type { ClusterProps } from "./types";

  let { 
    as = 'div',
    gap = 'md',
    hGap = gap,
    vGap = gap,
    justify = "center", 
    align = "center",
    children, 
    class: className,
    ...props
  }: ClusterProps = $props()
</script>


<svelte:element 
  this={as} 
  style:justify-content={justify}
  style:align-items={align}
  class={[
    "flex flex-nowrap",
    HorizontalGapClasses[hGap],
    VerticalGapClasses[vGap],
    AlignItemsClasses[align],
    JustifyContentClasses[justify],
    className
  ]}
  {...props}
>
  {@render children?.()}
</svelte:element>