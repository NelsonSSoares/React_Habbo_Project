import { habboService } from '../services/habboService';
import type { UserProfile } from '../types/UserProfile';
import { useHabboQuery } from './useHabboQuery';

export function useHabboByName(name: string) {
  return useHabboQuery<UserProfile>(
    () => habboService.getUserByName(name),
    [name]
  );
}