import type { Project } from '@/app/domain/entities/Project';
import type { ProjectRepository } from '@/app/domain/repositories/ProjectRepository';

export class GetProjects {
  constructor(private readonly repo: ProjectRepository) {}

  async execute(): Promise<readonly Project[]> {
    return this.repo.findAll();
  }
}
