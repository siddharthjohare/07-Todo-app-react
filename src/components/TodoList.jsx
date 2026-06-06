import React, { useState } from "react";

const TodoList = ({
  todos,
  toggleComplete,
  deleteTodo,
  startEdit,
  clearCompleted,
}) => {
  const [filter, setFilter] = useState("all");

  // React Filter Logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // for 'all'
  });

  const totalCount = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="list-section">
      <h1>All Tasks</h1>
      <p className="subtitle">Manage and track your listed entries.</p>

      {/* Filter Buttons */}
      <div className="filters">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <span>{totalCount} tasks</span>
        <span>{completedCount} completed</span>
      </div>

      {/* Dynamic List Rendering */}
      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-msg">No entries recorded under this filter.</p>
        ) : (
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <button
                className={`check-btn ${todo.completed ? "done" : ""}`}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.completed ? "✓" : ""}
              </button>
              <span className="todo-text">{todo.text}</span>
              <div className="action-container">
                <button className="edit-btn" onClick={() => startEdit(todo)}>
                  ✏️
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <button className="clear-btn" onClick={clearCompleted}>
        🗑️ Clear completed
      </button>
    </div>
  );
};

export default TodoList;
