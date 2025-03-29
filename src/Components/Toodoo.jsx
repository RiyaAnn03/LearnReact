import React, { useState } from "react";

const Toodoo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(1);
  const [editId, setEditId] = useState(null);

  function AddorEdit() {
    if(inputValue.trim()==="" )return
    const timeStamp = Date.now();
    if (editId != null) {
      const updateTask = task.map((item) =>
        editId === item.id ? { ...item, text: inputValue, time: timeStamp } : item
      );
      setTask(updateTask);
      setEditId(null);
    } else {
      setTask([...task, { id: count, text: inputValue, time: timeStamp }]);
      setCount((pre) => pre + 1);
    }
    setInputValue("");
  }

  function onDelete(id) {
    const deletedTask = task.filter((item) => item.id !== id);
    setTask(deletedTask);
  }

  function onEdit(id) {
    if (id != null) {
      const EditTask = task.find((item) => item.id === id);
      setInputValue(EditTask.text);
      setEditId(EditTask.id);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-700">To-Do List</h1>
      <div className="flex mt-4">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Enter a task"
          className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={AddorEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded-r ml-2 hover:bg-blue-600 transition"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>
      <ul className="mt-4 space-y-3">
        {task
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          ?.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm"
            >
              <span className="text-gray-700">{item.text}</span>
              <div>
                <button
                  onClick={() => onEdit(item.id)}
                  className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Toodoo;
