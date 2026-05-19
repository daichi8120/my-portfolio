import type { Profile } from '@/app/domain/entities/Profile';

export interface ProfileRepository {
  get(): Promise<Profile>;
}
