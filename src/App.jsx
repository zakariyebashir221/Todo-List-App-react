import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { TodoProvider } from "./context/TodoProvider"; // Correctly import TodoProvider

function App() {
  return (
    <TodoProvider> {/* Use TodoProvider here */}
      <div className="max-w-lg mx-auto mt-8"> {/* Move className to a div inside */}
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
