"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 text-center">
        <p className="text-red-500 font-medium mb-2">오류가 발생했어요</p>
        <p className="text-sm text-gray-500 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
