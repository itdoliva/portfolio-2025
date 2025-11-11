<script lang="ts">
	import { AspectRatioClasses } from "$lib/components/design-tokens/aspect-ratio";
	import type { FrameProps } from "./types";

  let { 
    children, 
    aspectRatio="auto", 
    class: className,
    ...props
  }: FrameProps = $props()
</script>

<figure 
  class={[
    "flex items-center justify-center overflow-hidden",
    "[&>img]:w-full [&>img]:h-full [&>img]:object-cover",
    "[&>video]:w-full [&>video]:h-full [&>video]:object-cover",
    AspectRatioClasses[aspectRatio],
    className
  ]}
  {...props}
>
  {@render children?.()}
</figure>