import { useEffect, useState } from "react";
import type { Todo } from "../models/models";
import { useGlobalState, GlobalState } from "./GlobalState.jsx";
import { ToDoItem } from "./ToDoItem.js";
import { Button } from "@mui/material";

export const ToDoPage = () => {
  const { todo } = useGlobalState();
  const { init } = useGlobalState();

  const [todos, setTodos] = useState<Todo[]>(todo || []);

  const addTodo = async (text: string) => {
    if (text.trim().length === 0) return;
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    GlobalState.set({ todo: [...todos, newTodo], init: false });
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    if (init && todos.length === 0) {
      addTodo("Build a to-do app");
    }
  }, []);

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    GlobalState.set({ todo: updatedTodos, init: false });
  };

  const editTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    GlobalState.set({ todo: updatedTodos, init: false });
  };

  const toggleItem = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    GlobalState.set({ todo: updatedTodos, init: false });
  };

  return (
    <div className="h-full w-full overflow-auto bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl mb-10 space-y-6">
        <form
          className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-2xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.elements[0] as HTMLInputElement;
            addTodo(input.value);
            input.value = "";
          }}
        >
          <input
            type="text"
            placeholder="New To Do"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm outline-none
                      placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />{" "}
          <Button type="submit" variant="contained" color="secondary">
            Add
          </Button>
        </form>
      </div>
      <div className="flex flex-col">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={toggleItem}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </div>
    </div>
  );
};
