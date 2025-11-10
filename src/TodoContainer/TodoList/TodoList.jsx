import TodoListRow from "./TodoListRow";

function TodoList({ todos, onDelete, onEdit, onTodoCompleted }) {
  return (
    <div className="space-y-2 ">
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoListRow todo={todo} onDelete={onDelete} onEdit={onEdit} onTodoCompleted={onTodoCompleted} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
