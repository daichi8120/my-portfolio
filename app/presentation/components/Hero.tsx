interface HeroProps {
  readonly name: string;
  readonly headline: string;
}

export function Hero({ name, headline }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-grid-gray-700/[0.2]"
    >
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {name}
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
          {headline}
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105"
        >
          制作実績を見る
        </a>
      </div>
    </section>
  );
}
