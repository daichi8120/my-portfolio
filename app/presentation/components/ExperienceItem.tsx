import { ArrowUpRight } from 'lucide-react';
import type { Experience, ExperienceLink } from '@/app/domain/entities/Experience';

interface ExperienceItemProps {
  readonly experience: Experience;
}

function formatPeriod(start: string, end?: string): string {
  const fmt = (yyyymm: string) => yyyymm.replace('-', '.');
  return end ? `${fmt(start)} — ${fmt(end)}` : `${fmt(start)} — Present`;
}

function linkLabel(link: ExperienceLink): string {
  if (link.label) return link.label;
  switch (link.type) {
    case 'github':
      return 'GitHub';
    case 'live':
      return 'Live';
    case 'paper':
      return 'Paper';
  }
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const period = formatPeriod(experience.period.start, experience.period.end);
  return (
    <article className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-3 md:gap-8 py-8 border-t border-zinc-200">
      <div className="font-mono text-sm text-zinc-500 pt-1">{period}</div>
      <div>
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold text-zinc-900">{experience.title}</h3>
          {experience.organization && (
            <p className="text-sm text-zinc-500">{experience.organization}</p>
          )}
        </header>

        <p className="mt-3 text-zinc-700 leading-relaxed">{experience.summary}</p>

        {experience.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {experience.highlights.map((h) => (
              <li key={h} className="text-zinc-600 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-[0.65rem] w-1.5 h-px bg-zinc-400" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {experience.tech.length > 0 && (
          <p className="mt-4 font-mono text-xs text-zinc-500 tracking-wide">
            {experience.tech.join(' · ')}
          </p>
        )}

        {experience.links && experience.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {experience.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-900 underline-offset-4 hover:underline"
              >
                {linkLabel(link)}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
