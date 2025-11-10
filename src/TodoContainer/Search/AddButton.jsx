function AddButton({ handleAdd, text }) {
  return (
    <button onClick={handleAdd} className="bg-blue-600 px-3 text-white rounded-sm">{text}</button>
  );
}

export default AddButton;
