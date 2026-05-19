export interface SocialLinks {
  readonly twitter?: string;
  readonly github?: string;
  readonly linkedin?: string;
}

export interface Profile {
  readonly name: string;
  readonly headline: string;
  readonly affiliation: readonly string[];
  readonly bio: readonly string[];
  readonly email: string;
  readonly socials: SocialLinks;
}
