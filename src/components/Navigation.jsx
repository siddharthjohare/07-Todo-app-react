import React from "react";

const Navigation = ({ currentView, navigateTo, totalTasks }) => {
  return (
    <nav className="nav-bar">
      <button
        className={`nav-link ${currentView === "form" ? "active" : ""}`}
        onClick={() => navigateTo("form")}
      >
        ✍️ Create Task
      </button>
      <button
        className={`nav-link ${currentView === "list" ? "active" : ""}`}
        onClick={() => navigateTo("list")}
      >
        📋 View List <span className="nav-badge">{totalTasks}</span>
      </button>
    </nav>
  );
};

export default Navigation;
