import type { Project } from '@/app/domain/entities/Project';

export interface ProjectRepository {
  findAll(): Promise<readonly Project[]>;
}
