"use server";

import { revalidatePath } from "next/cache";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  if (!title?.trim()) return;

  const res = await fetch(`${BACKEND_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title.trim() }),
  });
  if (!res.ok) throw new Error("할 일 추가에 실패했어요.");
  revalidatePath("/todos");
}

export async function updateTodo(
  id: number,
  data: { title?: string; completed?: boolean }
) {
  const res = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("할 일 수정에 실패했어요.");
  revalidatePath("/todos");
}

export async function deleteTodo(id: number) {
  const res = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("할 일 삭제에 실패했어요.");
  revalidatePath("/todos");
}
