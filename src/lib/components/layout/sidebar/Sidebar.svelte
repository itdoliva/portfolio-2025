<script lang="ts">
	import { GapClasses } from "$lib/components/design-tokens/spacing";
	import type { SidebarProps } from "./types";

  let { 
    children,
    gap = 'none',
    rightSide = false,

    sideWidth = 'auto',
    sideMaxWidth = "32ch",
    sideMinWidth = '0',
    contentMinWidth = '0',

    class: className,
    ...props
  }: SidebarProps = $props();
</script>

<div 
  style:--side-width={sideWidth}
  style:--side-max-width={sideMaxWidth}
  style:--side-min-width={sideMinWidth}
  style:--content-min-width={contentMinWidth}
  class={[
    "flex flex-wrap",
    !rightSide && [
      "*:first:basis-(--side-width) *:first:grow",
      "*:first:min-w-(--side-min-width) *:first:max-w-(--side-max-width)",
      "*:last:basis-0 *:last:grow-999",
      "*:last:min-w-(--content-min-width)"
    ],
    rightSide && [
      "*:last:basis-(--side-width) *:last:grow",
      "*:last:min-w-(--side-min-width) *:last:max-w-(--side-max-width)",
      "*:first:basis-0 *:first:grow-999",
      "*:first:min-w-(--content-min-width)",
    ],
    GapClasses[gap],
    className
  ]}
  {...props}
>
  {@render children?.()}
</div>