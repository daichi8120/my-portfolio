import { GetProfile } from '@/app/application/usecases/GetProfile';
import { GetProjects } from '@/app/application/usecases/GetProjects';
import { GetSkills } from '@/app/application/usecases/GetSkills';
import { StaticProfileRepository } from '@/app/infrastructure/repositories/StaticProfileRepository';
import { StaticProjectRepository } from '@/app/infrastructure/repositories/StaticProjectRepository';
import { StaticSkillRepository } from '@/app/infrastructure/repositories/StaticSkillRepository';

export const getProjects = new GetProjects(new StaticProjectRepository());
export const getSkills = new GetSkills(new StaticSkillRepository());
export const getProfile = new GetProfile(new StaticProfileRepository());
