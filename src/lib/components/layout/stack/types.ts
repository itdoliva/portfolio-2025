import type { HTMLAttributes } from "svelte/elements";
import type { DivLikeElement } from "$lib/types/props.types";
import type { OptionalSizeVariant } from "$lib/components/design-tokens/types";

export type StackProps = {
  as?: DivLikeElement;
  spacing?: OptionalSizeVariant;
  bordered?: boolean;
} & HTMLAttributes<HTMLDivElement>;