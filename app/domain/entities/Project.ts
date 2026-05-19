export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly imageUrl: string;
  readonly link: string;
}
