import type { HTMLAttributes } from "svelte/elements";
import type { DivLikeElement } from "$lib/types/props.types";
import type { OptionalSizeVariant } from "$lib/components/design-tokens/types";

export type BoxProps = {
  as?: DivLikeElement;
  padding?: OptionalSizeVariant;
  bordered?: boolean;
  rounded?: boolean;
} & HTMLAttributes<HTMLDivElement>;