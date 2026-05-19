import type { Profile } from '@/app/domain/entities/Profile';
import type { ProfileRepository } from '@/app/domain/repositories/ProfileRepository';

export class GetProfile {
  constructor(private readonly repo: ProfileRepository) {}

  async execute(): Promise<Profile> {
    return this.repo.get();
  }
}
