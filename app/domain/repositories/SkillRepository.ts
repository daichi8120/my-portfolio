import type { Skill } from '@/app/domain/entities/Skill';

export interface SkillRepository {
  findAll(): Promise<readonly Skill[]>;
}
