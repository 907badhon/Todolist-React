function FilteredTodos({ setFilter }) {
  return (
    <div className="flex justify-around gap-10">
      <button onClick={() => {setFilter("All")}}
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        All
      </button>
      <button onClick={() => {setFilter("progress")}}
      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Progress
      </button>
      <button onClick={() => {setFilter("completed")}} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
        Completed
      </button>
    </div>
  );
}

export default FilteredTodos;
