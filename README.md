# 📝 State-Driven React Todo Engine (Custom Router Simulation)

A production-grade, highly architectural productivity pipeline built using React.js and Vite. Rather than leaning on external routing dependencies, this system engineers a high-performance view-switching engine using core declarative functional states. It fully encapsulates a comprehensive CRUD system synchronized with the browser's persistent caching layer and dynamic array predicate filters.

---

### 🚀 Live Deployment
👉 **[Click Here to View Live Todo Engine Dashboard](https://07-todo-app-react.vercel.app/)**

---

**🛠️ Technical Implementation & Core Concepts**
This repository stands as a robust demonstration of explicit multi-view logic virtualization and clean reactive functional programming paradigms:

**Router Simulation & View Virtualization:** Engineered an independent viewport shifting solution by binding structural button interfaces to a local scalar string hook (view), enabling immediate component tree mounts (form vs list) without loading standard browser router bundles.

**Lazy Caching & Lazy State Initializer:** Initialized the core task list structure using an optimized closure pattern inside useState to safely evaluate browser client storage streams (react_todos) on initial render, cleanly bootstrapping fallback objects if empty.

**Context-Aware Polymorphic Forms:** Designed the input container (TodoForm) to act morphically across operations. By utilizing synchronized lifecycle execution listeners (useEffect), it dynamically reconfigured text buffers to serve either as a fresh insertion node (addTodo) or a contextual mutation node (updateTodo) based on references.

**Immutable Array Matrix Transformations:** Executed core CRUD state changes cleanly across separate functional hooks:

**Create:** Concatenated new task entries with atomic timestamps (Date.now()) into arrays via the ES6 spread syntax.

**Read:** Handled layout generation through clean rendering loops implementing explicit list key bindings.

**Update:** Evaluated items using clean element updates (todos.map) targeting key-matching indicators.

**Delete:** Pruned records smoothly using strict conditional filters (todos.filter).

**Dynamic Predicate Sub-Filtering:** Authored a responsive data filter processing bridge within the collection grid view. By applying dynamic string conditionals, it runs non-blocking filters to produce live structural subsets ("All", "Active", "Completed") without breaking parent data sets.

**Design Engineering & CSS Keyframes:** Formatted an advanced responsive styling landscape using declarative custom tokens (:root architecture). Leveraged layout grids, hardware transitions (all 0.3s ease), line-through text overrides, and automated animation keyframes (@keyframes fadeIn) to prevent visual friction during structural updates.

**📦 Tech Stack Used**
Interface Architecture: React.js (Component Composition Mode)

**Build System:** Vite Performance Bundler

**Style Engine:** Modern CSS3 (Variables Configuration, Pseudo-selectors, Keyframe Engine)

**Data Storage System:** Native Web Browser LocalStorage API

**State Operations Matrix:** Functional Reactive React Hooks (useState, useEffect)

**📂 Decoupled Codebase Layout**
**src/App.jsx** - Central command hub controlling routing models, relational array modifications, and data persistence syncs.

s**rc/components/Navigation.jsx** - Simulates routing actions by executing tracking badges and link parameters dynamically.

**src/components/TodoForm.jsx** - Multi-use transaction panel regulating user entry checking and automated text clearing steps.

**src/components/TodoList.jsx** - Task rendering block housing filter control matrices, real-time metrics trackers, and delete hooks.

**src/App.css** - Central stylesheet containing layout definitions, typography variables, animation definitions, and responsiveness guidelines.

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
