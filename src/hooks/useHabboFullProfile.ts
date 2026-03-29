import { habboService } from "../services/habboService";
import type { FullProfile } from "../types/FullProfile";
import { useHabboQuery } from "./useHabboQuery";

export function useHabboFullProfile(id: string) {
  return useHabboQuery<FullProfile>(
    () => habboService.getProfile(id),
    [id]
  );
}