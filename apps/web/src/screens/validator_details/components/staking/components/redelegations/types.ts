import { RedelegationType } from '../../types';

export type ItemType = Override<RedelegationType, { to: AvatarName; address: AvatarName }>;
