import type { Experience } from '@/app/domain/entities/Experience';

export interface ExperienceRepository {
  findAll(): Promise<readonly Experience[]>;
}
