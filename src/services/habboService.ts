import type { Badge } from '../types/Badges';
import type { Friend } from '../types/Friend';
import type { FullProfile } from '../types/FullProfile';
import type { Group } from '../types/Group';
import type { Room } from '../types/Room';
import type { UserProfile } from '../types/UserProfile';
import { api } from './api';

export const habboService = {
  getUserByName: (name: string) =>
    api.get<UserProfile>(`/users?name=${encodeURIComponent(name)}`).then(r => r.data),

  getUserById: (id: string) =>
    api.get<UserProfile>(`/users/${id}`).then(r => r.data),

  getProfile: (id: string) =>
    api.get<FullProfile>(`/users/${id}/profile`).then(r => r.data),

  getBadges: (id: string) =>
    api.get<Badge[]>(`/users/${id}/badges`).then(r => r.data),

  getRooms: (id: string) =>
    api.get<Room[]>(`/users/${id}/rooms`).then(r => r.data),

  getGroups: (id: string) =>
    api.get<Group[]>(`/users/${id}/groups`).then(r => r.data),

  getFriends: (id: string) =>
    api.get<Friend[]>(`/users/${id}/friends`).then(r => r.data),
};