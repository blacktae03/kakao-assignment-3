"use client";

import Link from "next/link";
import { useTransition } from "react";
import { updateTodo, deleteTodo } from "@/app/actions";
import type { Todo } from "@/app/actions";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();

  function handleToggle() {
    startTransition(() => updateTodo(todo.id, { completed: !todo.completed }));
  }

  function handleDelete() {
    startTransition(() => deleteTodo(todo.id));
  }

  return (
    <li
      className={`group flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors ${
        isPending ? "opacity-50" : ""
      }`}
    >
      <button
        onClick={handleToggle}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
          todo.completed
            ? "bg-blue-500 border-blue-500"
            : "border-gray-300 hover:border-blue-400"
        }`}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm ${
          todo.completed ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        {todo.title}
      </span>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Link
          href={`/todos/${todo.id}`}
          className="text-xs px-2 py-1 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded transition-colors"
        >
          수정
        </Link>
        <button
          onClick={handleDelete}
          className="text-xs px-2 py-1 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
        >
          삭제
        </button>
      </div>
    </li>
  );
}
