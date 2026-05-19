export type SkillIconKey =
  | 'cpp'
  | 'python'
  | 'rust'
  | 'typescript'
  | 'flutter'
  | 'nextjs'
  | 'react';

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly iconKey: SkillIconKey;
}
