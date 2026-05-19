import type { Experience as ExperienceEntity, ExperienceCategory } from '@/app/domain/entities/Experience';
import { ExperienceItem } from '@/app/presentation/components/ExperienceItem';

interface ExperienceProps {
  readonly experiences: readonly ExperienceEntity[];
}

const CATEGORY_ORDER: readonly ExperienceCategory[] = [
  'Internship',
  'Research',
  'Personal Project',
] as const;

const CATEGORY_LABEL: Record<ExperienceCategory, string> = {
  Internship: 'Internship',
  Research: 'Research',
  'Personal Project': 'Personal Project',
};

export function Experience({ experiences }: ExperienceProps) {
  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    items: experiences.filter((e) => e.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">02 · Experience</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">これまでの活動</h2>
        </header>

        <div className="space-y-16">
          {groups.map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {CATEGORY_LABEL[category]}
              </h3>
              <div>
                {items.map((exp) => (
                  <ExperienceItem key={exp.id} experience={exp} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
