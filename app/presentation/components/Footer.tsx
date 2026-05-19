import { Github, Linkedin, Twitter } from 'lucide-react';
import type { Profile } from '@/app/domain/entities/Profile';

interface FooterProps {
  readonly profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const { socials } = profile;
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">お問い合わせ</h2>
        <p className="text-gray-400 mb-6">
          お仕事のご依頼やご相談など、お気軽にご連絡ください。
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {profile.email}
        </a>
        <div className="flex justify-center space-x-6 mt-8">
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          )}
        </div>
        <p className="text-gray-500 mt-10 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
