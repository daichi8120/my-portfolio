import type { ComponentType } from 'react';
import {
  SiCplusplus,
  SiFlutter,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
} from 'react-icons/si';
import type { SkillIconKey } from '@/app/domain/entities/Skill';

export interface SkillIconProps {
  readonly size?: number;
  readonly className?: string;
}

export const skillIcons: Record<SkillIconKey, ComponentType<SkillIconProps>> = {
  cpp: SiCplusplus,
  python: SiPython,
  rust: SiRust,
  typescript: SiTypescript,
  flutter: SiFlutter,
  nextjs: SiNextdotjs,
  react: SiReact,
};
