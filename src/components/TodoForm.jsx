import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo, editTaskData, updateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  // Set the input value with data passed from the parent when editing.
  useEffect(() => {
    if (editTaskData) {
      setInputValue(editTaskData.text);
    } else {
      setInputValue("");
    }
  }, [editTaskData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editTaskData) {
      // Update logic
      updateTodo(editTaskData.id, inputValue);
    } else {
      // Add logic
      addTodo(inputValue);
    }
    setInputValue(""); // Clear input box
  };

  return (
    <div className="form-section">
      <h1>{editTaskData ? "✏️ Edit Task" : "Create Task"}</h1>
      <p className="subtitle">Enter your task below to save it for later.</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className={`submit-btn ${editTaskData ? "edit-mode" : ""}`}
        >
          {editTaskData ? "Save Changes" : "Add to List"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
