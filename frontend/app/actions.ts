const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(`${BACKEND_URL}/todos`, { cache: "no-store" });
  if (!res.ok) throw new Error("할 일 목록을 불러오지 못했어요.");
  return res.json();
}

export async function getTodo(id: number): Promise<Todo> {
  const res = await fetch(`${BACKEND_URL}/todos/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("할 일을 불러오지 못했어요.");
  return res.json();
}
