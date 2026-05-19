import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center px-6">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold">
          ページが見つかりませんでした
        </h1>
        <p className="mt-4 text-zinc-600">
          URL が正しいかご確認ください。
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm text-zinc-900 underline underline-offset-4 hover:opacity-70"
        >
          トップに戻る
        </Link>
      </div>
    </div>
  );
}
