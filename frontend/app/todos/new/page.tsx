"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { createTodo } from "@/app/mutations";

export default function NewTodoPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await createTodo(formData);
      router.push("/todos");
      router.refresh();
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-800">새 할 일 추가</h1>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              할 일
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="할 일을 입력하세요"
              autoFocus
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50 transition-colors"
            >
              {isPending ? "추가 중..." : "추가"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
