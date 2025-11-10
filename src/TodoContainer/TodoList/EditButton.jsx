

function EditButton({onEdit, todo}) {
    return (
        <button onClick={() => onEdit(todo)}>Edit</button>
    )
}

export default EditButton