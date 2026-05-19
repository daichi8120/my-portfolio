'use client';

interface ErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function GlobalError({ reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-indigo-400 font-semibold">エラー</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          予期せぬエラーが発生しました
        </h1>
        <p className="mt-4 text-gray-400">
          時間をおいて再度お試しください。
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all"
        >
          再試行する
        </button>
      </div>
    </div>
  );
}
