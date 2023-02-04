import { Trash, Check } from 'phosphor-react';
import { useContext } from 'react';
import { TodoContext } from '../../context';

interface Props {
  id: string;
  content: string;
}

export const ListItems = ({ id, content }: Props) => {
  const { deleteTodo, completedTodo, tasks } = useContext(TodoContext);

  function deleteTodoHandler() {
    deleteTodo(id);
  }

  function completeTodoHandler() {
    completedTodo(id);
  }

  function checkIfTodoCompleted() {
    const indexTodo = tasks.findIndex(i => i.id === id);

    return tasks[indexTodo].completed ? 'line-through text-grayvar-200' : '';
  }

  return (
    <div className="flex justify-between items-start bg-grayvar-300 border border-grayvar-400 rounded-lg p-4">
      <div className="flex items-start gap-2">
        <div className="relative">
          <input
            type="checkbox"
            id="checkCompleted"
            className="peer appearance-none cursor-pointer border-2 border-babyBlue-400 rounded-full checked:border-lPurple-300 checked:bg-lPurple-300 transition-colors w-5 h-5"
            onChange={completeTodoHandler}
          />
          <span className="pointer-events-none w-4 h-4 block absolute top-[.1875rem] left-[.1875rem] text-white opacity-0 check-1">
            <Check />
          </span>
        </div>

        <span
          className={`text-gray-200 h-4 leading-4 ${checkIfTodoCompleted()}`}
        >
          {content}
        </span>
      </div>
      <button onClick={deleteTodoHandler}>
        <Trash className="min-w-[1.125rem] min-h-[1.125rem] text-grayvar-200 cursor-pointer hover:text-red-400 transition-colors" />
      </button>
    </div>
  );
};
