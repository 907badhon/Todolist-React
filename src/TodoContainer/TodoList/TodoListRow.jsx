
import CheckBoxToggle from "./CheckBoxToggle";
import DltButton from "./DltButton";
import EditButton from "./EditButton";
import TaskText from "./TaskText";

function TodoListRow({ todo, onDelete, onEdit, onTodoCompleted }) {




  return (
    <div className="bg-gray-300  rounded-sm py-2 px-5 w-full outline-none flex items-center justify-between text-xl">
      <div className="flex items-center">
        <CheckBoxToggle onTodoCompleted={onTodoCompleted} todo={todo} />
        <TaskText todo={todo}/>
      </div>
      <div className="space-x-2">
        <EditButton onEdit={onEdit} todo={todo}/>
        <DltButton onDelete={onDelete} todo={todo}/>
      </div>
    </div>
  );
}

export default TodoListRow;
