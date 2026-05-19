import type { Profile } from '@/app/domain/entities/Profile';

interface AboutProps {
  readonly profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">01 · About</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">私について</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-8 md:gap-12">
          <div className="font-mono text-sm text-zinc-500 space-y-1">
            {profile.affiliation.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="space-y-5 text-zinc-700 leading-relaxed">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
