



function DltButton({ onDelete, todo }) {

  return <button onClick={() => onDelete(todo.id)}>❌</button>;
}


export default DltButton