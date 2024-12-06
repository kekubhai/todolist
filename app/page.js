"use client";

import React, { useState } from "react";

const TodoListPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Both Title and Description are required!");
      return;
    }
    setTasks([...tasks, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className="bg-black text-white p-5 text-xl text-center">
        Anirban's Todo List
      </h1>
      <div className="flex justify-center items-center flex-col">
        <form onSubmit={submitHandler} className="flex gap-4 my-5">
          <input
            className="border-black border-2 px-4 py-2"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border-black border-2 px-4 py-2"
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-black px-4 py-2 rounded font-bold"
          >
            Submit
          </button>
        </form>
        <div className="p-5 bg-yellow-500 w-full md:w-1/2 rounded">
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b-2 pb-2 mb-2"
                >
                  <div>
                    <h5 className="text-2xl font-semibold">{task.title}</h5>
                    <h6 className="text-lg">{task.desc}</h6>
                  </div>
                  <button
                    onClick={() => deleteHandler(index)}
                    className="bg-red-400 text-white px-4 py-2 rounded font-bold"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="text-center text-xl">No tasks available</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoListPage;
