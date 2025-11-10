


function InputBox({ setNewItem, newItem }) {
  return (
    <input
      className="bg-white rounded-sm py-2 px-5 w-full outline-none"
      placeholder="Add your new Todo"
      type="text"
      onChange={(e) => setNewItem(e.target.value)}
      value={newItem}
    />
  );
}

export default InputBox;
