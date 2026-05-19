import type { Skill } from '@/app/domain/entities/Skill';
import type { SkillRepository } from '@/app/domain/repositories/SkillRepository';

export class GetSkills {
  constructor(private readonly repo: SkillRepository) {}

  async execute(): Promise<readonly Skill[]> {
    return this.repo.findAll();
  }
}
