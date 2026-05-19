'use client';

interface ErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center px-6">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Error</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold">
          予期せぬエラーが発生しました
        </h1>
        <p className="mt-4 text-zinc-600">
          時間をおいて再度お試しください。
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-block text-sm text-zinc-900 underline underline-offset-4 hover:opacity-70"
        >
          再試行する
        </button>
      </div>
    </div>
  );
}
