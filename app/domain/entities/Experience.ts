export type ExperienceCategory = 'Internship' | 'Research' | 'Personal Project';

export type ExperienceLinkType = 'github' | 'live' | 'paper';

export interface ExperienceLink {
  readonly type: ExperienceLinkType;
  readonly url: string;
  readonly label?: string;
}

export interface ExperiencePeriod {
  readonly start: string;
  readonly end?: string;
}

export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly organization?: string;
  readonly category: ExperienceCategory;
  readonly period: ExperiencePeriod;
  readonly status: 'In Progress' | 'Completed';
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly tech: readonly string[];
  readonly links?: readonly ExperienceLink[];
}
