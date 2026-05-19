export type SkillCategory =
  | 'Languages'
  | 'Web'
  | 'Mobile'
  | 'ML / Simulation'
  | 'Cloud';

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
}
