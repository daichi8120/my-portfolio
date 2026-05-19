import type { Profile } from '@/app/domain/entities/Profile';

interface AboutProps {
  readonly profile: Profile;
}

export function About({ profile }: AboutProps) {
  const initials = profile.name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('.');

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">私について</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div
            aria-hidden="true"
            className="flex-shrink-0 flex items-center justify-center rounded-full w-40 h-40 md:w-48 md:h-48 bg-indigo-500 text-white text-4xl md:text-5xl font-bold border-4 border-gray-700"
          >
            {initials}
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-400 mb-4">
              {profile.affiliation.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < profile.affiliation.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            {profile.bio.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`text-md text-gray-300 ${
                  index < profile.bio.length - 1 ? 'mb-4' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
