import type { Experience } from '@/app/domain/entities/Experience';
import type { ExperienceRepository } from '@/app/domain/repositories/ExperienceRepository';

export class GetExperiences {
  constructor(private readonly repo: ExperienceRepository) {}

  async execute(): Promise<readonly Experience[]> {
    const experiences = await this.repo.findAll();
    return [...experiences].sort((a, b) => b.period.start.localeCompare(a.period.start));
  }
}
