import type { BoxProps } from '$lib/components/layout/box/types';
import type { CenterProps } from '$lib/components/layout/center/types';

export type ContainerProps = {
	intrinsic: CenterProps['intrinsic'];
	maxWidth: CenterProps['maxWidth'];
} & BoxProps;
