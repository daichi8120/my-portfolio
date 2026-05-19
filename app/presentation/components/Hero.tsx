interface HeroProps {
  readonly name: string;
  readonly tagline: string;
}

export function Hero({ name, tagline }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Portfolio · 2026</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight">
          {name}
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-zinc-600 max-w-2xl leading-relaxed">
          {tagline}
        </p>
        <div className="mt-10 flex items-center gap-x-6 text-sm">
          <a href="#experience" className="text-zinc-900 underline underline-offset-4 hover:opacity-70">
            View experience
          </a>
          <a href="#contact" className="text-zinc-500 hover:text-zinc-900">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
