import type { Badge } from "./Badges";
import type { Friend } from "./Friend";
import type { Group } from "./Group";
import type { Room } from "./Room";
import type { UserProfile } from "./UserProfile";

export type FullProfile = UserProfile & {
  groups: Group[];
  badges: Badge[];
  friends: Friend[];
  rooms: Room[];
};