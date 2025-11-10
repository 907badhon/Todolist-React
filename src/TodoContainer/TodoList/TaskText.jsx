

function TaskText({ todo }) {
    return  todo.completed ? (
            <div className="flex items-center">
            <span style={{ textDecoration: "line-through" }}>{todo.text}</span>
            <span className="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded text-xs ml-2">Complete</span>
            </div>
        ) : <span>{todo.text}</span>
    }

        // <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
        
    


export default TaskText