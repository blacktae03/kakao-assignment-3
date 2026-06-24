export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-9 w-16 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <ul className="divide-y divide-gray-100">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center gap-3 px-6 py-4">
              <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse shrink-0" />
              <div className="h-4 bg-gray-200 rounded animate-pulse flex-1" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
