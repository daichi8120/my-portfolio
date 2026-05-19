import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-indigo-400 font-semibold">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          ページが見つかりませんでした
        </h1>
        <p className="mt-4 text-gray-400">
          URL が正しいかご確認ください。
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all"
        >
          トップに戻る
        </Link>
      </div>
    </div>
  );
}
