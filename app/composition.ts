import { GetExperiences } from '@/app/application/usecases/GetExperiences';
import { GetProfile } from '@/app/application/usecases/GetProfile';
import { GetSkills } from '@/app/application/usecases/GetSkills';
import { StaticExperienceRepository } from '@/app/infrastructure/repositories/StaticExperienceRepository';
import { StaticProfileRepository } from '@/app/infrastructure/repositories/StaticProfileRepository';
import { StaticSkillRepository } from '@/app/infrastructure/repositories/StaticSkillRepository';

export const getProfile = new GetProfile(new StaticProfileRepository());
export const getExperiences = new GetExperiences(new StaticExperienceRepository());
export const getSkills = new GetSkills(new StaticSkillRepository());
