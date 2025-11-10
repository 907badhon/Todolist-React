import AddButton from "./AddButton";
import InputBox from "./InputBox";
import { useEffect } from "react";

import { useState } from "react";

function AddItems({ onAdd, editingText, onUpdate, editingId }) {
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    setNewItem(editingText || "");
  }, [editingText]);

  function handleAdd() {
    if (newItem.trim() === "") return;

    if (editingId) {
      onUpdate(newItem);
    } else {
      onAdd(newItem);
    }
    setNewItem("");
  }

  return (
    <div className="flex justify-between gap-2">
      <InputBox setNewItem={setNewItem} newItem={newItem} />
      <AddButton handleAdd={handleAdd} text={editingId ? "Update" : "Add"} />
    </div>
  );
}

export default AddItems;
