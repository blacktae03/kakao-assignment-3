import Link from "next/link";
import { getTodos } from "@/app/actions";
import TodoItem from "./TodoItem";

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">할 일 목록</h1>
          <Link
            href="/todos/new"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            + 추가
          </Link>
        </div>

        {todos.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-400">
            <p className="text-lg">할 일이 없어요</p>
            <p className="text-sm mt-1">새 할 일을 추가해보세요!</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
