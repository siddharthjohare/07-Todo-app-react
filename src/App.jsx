import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"; // Isme purani wali saari CSS daal dena

const App = () => {
  // ─── 1. State Initialization (Using LocalStorage) ───
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("react_todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 1, text: "Learn React Components", completed: false },
          { id: 2, text: "Master React Hooks", completed: false },
        ];
  });

  const [view, setView] = useState("form"); //Page transition state ('form' or 'list')
  const [editTaskData, setEditTaskData] = useState(null); //Store the data of the task selected for editing

  // ─── 2. SYNC WITH LOCALSTORAGE ───
  useEffect(() => {
    localStorage.setItem("react_todos", JSON.stringify(todos));
  }, [todos]);

  // ─── 3. HANDLERS (CRUD METHODS) ───

  // CREATE
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Unique ID generating trick
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setView("list"); //Redirect the user to the list page after successfully adding a task.
  };

  // UPDATE (Text Change)
  const updateTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
    setEditTaskData(null); // Reset edit state
    setView("list"); // Return to list view
  };

  // UPDATE (Toggle Checkbox status)
  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    if (editTaskData?.id === id) setEditTaskData(null);
  };

  // TRIGGER EDIT FLOW
  const handleStartEdit = (todo) => {
    setEditTaskData(todo);
    setView("form"); // Redirect user directly to editing screen
  };

  // CLEAR COMPLETED
  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  return (
    <div
      className="app-wrapper"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Simulation Routing Navigation Bar */}
      <Navigation
        currentView={view}
        navigateTo={setView}
        totalTasks={todos.length}
      />

      <div className="app">
        {/* Conditional Rendering logic to switch pages */}
        {view === "form" && (
          <TodoForm
            addTodo={addTodo}
            editTaskData={editTaskData}
            updateTodo={updateTodo}
          />
        )}

        {view === "list" && (
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            startEdit={handleStartEdit}
            clearCompleted={clearCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default App;
