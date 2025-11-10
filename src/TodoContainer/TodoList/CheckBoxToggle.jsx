function CheckBoxToggle({ onTodoCompleted, todo }) {
  return <input
  checked={!!todo.completed}
  onChange={() => onTodoCompleted(todo.id)}
  type="checkbox" className="mr-3 w-4 h-4 accent-green-600" />;
}

export default CheckBoxToggle;
