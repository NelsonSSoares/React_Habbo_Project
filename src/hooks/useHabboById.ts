import { habboService } from '../services/habboService';
import type { UserProfile } from '../types/UserProfile';
import { useHabboQuery } from './useHabboQuery';

export function useHabboById(id: string) {
  return useHabboQuery<UserProfile>(
    () => habboService.getUserById(id),
    [id]
  );
}