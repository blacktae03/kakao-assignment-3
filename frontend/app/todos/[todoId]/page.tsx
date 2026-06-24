import { getTodo } from "@/app/actions";
import EditTodoForm from "./EditTodoForm";

export default async function EditTodoPage({
  params,
}: {
  params: Promise<{ todoId: string }>;
}) {
  const { todoId } = await params;
  const todo = await getTodo(Number(todoId));
  return <EditTodoForm todo={todo} />;
}
