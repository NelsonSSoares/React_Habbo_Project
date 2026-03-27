import type { UserProfile } from '../types/UserProfile';
import { api } from './api';

export const habboService = {
  getUserByName: (name: string) =>
    api.get<UserProfile>(`/users?name=${encodeURIComponent(name)}`).then(r => r.data),

  getUserById: (id: string) =>
    api.get<UserProfile>(`/users/${id}`).then(r => r.data),

  getProfile: (id: string) =>
    api.get(`/users/${id}/profile`).then(r => r.data),

  getBadges: (id: string) =>
    api.get(`/users/${id}/badges`).then(r => r.data),

  getRooms: (id: string) =>
    api.get(`/users/${id}/rooms`).then(r => r.data),

  getGroups: (id: string) =>
    api.get(`/users/${id}/groups`).then(r => r.data),

  getFriends: (id: string) =>
    api.get(`/users/${id}/friends`).then(r => r.data),
};