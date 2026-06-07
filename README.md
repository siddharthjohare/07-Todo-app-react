# 📝 State-Driven React Todo Engine (Custom Router Simulation)

A production-grade, highly architectural productivity pipeline built using React.js and Vite. Rather than leaning on external routing dependencies, this system engineers a high-performance view-switching engine using core declarative functional states. It fully encapsulates a comprehensive CRUD system synchronized with the browser's persistent caching layer and dynamic array predicate filters.

---

### 🚀 Live Deployment
👉 **[Click Here to View Live Todo Engine Dashboard](https://07-todo-app-react.vercel.app/)**

---

### 🎮 Architecture & State-Routing Blueprint

The codebase operates as a micro single-page system by executing dynamic layout tree updates based on central route string parameters:

```text
                        [App.jsx (Core Orchestrator)]
            Tracks Unified [todos] Matrix & [view] String State
                                     |
           -----------------------------------------------------
          ↓                                                     ↓
   [Navigation.jsx]                                      [Main Render Pod]
(Switches Active View Link)                                      |
                                              -----------------------------------
                                             ↓                                   ↓
                                     view === "form"                     view === "list"
                                    [TodoForm.jsx]                      [TodoList.jsx]
                              Handles Add / Edit Injections       Processes Filter Toggles, Maps
                                                                   Items & Mass Purge Mutators
