import { useState } from "react";
import Header from "./Header/Header";
import AddItems from "./Search/AddItems";
import TodoFooter from "./TodoFooter/TodoFooter";
import TodoList from "./TodoList/TodoList";
import FilteredTodos from "./FilteredTodos/FilteredTodos";

function TodoContainer() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build App", completed: false},
  ]);

  const [filter, setFilter] = useState("All");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  function addTodo(newItem) {
    const newTask = {
      id: Date.now(),
      text: newItem,
      completed: false,
    };
    setTodos([...todos, newTask]);
  }

  function dltTodo(id) {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  function UpdateTodo(newTask) {
    const newTodosList = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: newTask } : todo
    );
    setTodos(newTodosList);
    setEditingId(null);
    setEditingText("");
  }

  function clearAllTodos() {
    setTodos([]);
  }

  function TodoCompleted(id) {
    const completeTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(completeTodo);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "progress") return todo.completed === false;
    if (filter === "completed") return todo.completed === true;
  });

  return (
    <div className="bg-gray-200 shadow-2xl p-5 rounded-lg max-w-sm mx-auto mt-10 space-y-6">
      <Header />
      <AddItems
        onAdd={addTodo}
        editingText={editingText}
        onUpdate={UpdateTodo}
        editingId={editingId}
      />
      <FilteredTodos setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDelete={dltTodo}
        onEdit={startEdit}
        onTodoCompleted={TodoCompleted}
      />
      <TodoFooter todos={todos} onClearAll={clearAllTodos} />
    </div>
  );
}

export default TodoContainer;
