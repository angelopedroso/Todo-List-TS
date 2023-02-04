import { createContext, ReactNode, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface Props {
  children: ReactNode;
}

interface TodoItem {
  id: string;
  content: string;
  completed: boolean;
}

interface Todos {
  tasks: TodoItem[];
  addTodo: (content: string) => void;
  completedTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoContext = createContext<Todos>({
  tasks: [],
  addTodo: () => {},
  completedTodo: () => {},
  deleteTodo: () => {},
});

export const TodoProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  function addTodo(content: string) {
    setTasks(tasks => [...tasks, { id: uuid(), content, completed: false }]);
  }

  function completedTodo(id: string) {
    const completedTodo = tasks.findIndex(task => task.id === id);

    setTasks(tasks =>
      tasks.map((task, index) =>
        index === completedTodo ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTodo(id: string) {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <TodoContext.Provider value={{ tasks, addTodo, completedTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
