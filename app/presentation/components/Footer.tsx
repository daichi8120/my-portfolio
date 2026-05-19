import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import type { Profile } from '@/app/domain/entities/Profile';

interface FooterProps {
  readonly profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const { socials } = profile;
  return (
    <footer id="contact" className="border-t border-zinc-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">04 · Contact</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">お問い合わせ</h2>
        </header>

        <p className="text-zinc-700 leading-relaxed max-w-2xl">
          お仕事のご相談や、研究・開発に関するお話など、お気軽にご連絡ください。
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-zinc-900 underline underline-offset-4 hover:opacity-70"
          >
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
            >
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
            >
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
            >
              <Twitter size={16} aria-hidden="true" /> X
            </a>
          )}
        </div>

        <p className="mt-16 font-mono text-xs text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
