import Logo from '../assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface Props {
  fetchTask: () => Promise<void>;
}

export const Header = ({ fetchTask }: Props) => {
  const [newTask, setNewTask] = useState<string>('');

  function addNewTaskHandler(event: FormEvent<HTMLInputElement>) {
    setNewTask(event.currentTarget.value);
  }

  async function submitTaskHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch(
      'https://todolist-52d6c-default-rtdb.firebaseio.com/Task.json',
      {
        method: 'POST',
        body: JSON.stringify({ id: uuid(), content: newTask }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    fetchTask();
    setNewTask('');
  }

  return (
    <header className="flex flex-col justify-between items-center bg-grayvar-500 h-1/5 w-full">
      <img src={Logo} alt="Logo" className="h-12 mt-10" />
      <form
        className="flex justify-between gap-2 w-2/4 max-w-xl h-10 -mb-5"
        onSubmit={submitTaskHandler}
      >
        <input
          type="text"
          name="newTodo"
          placeholder="Adicione uma nova tarefa"
          className="rounded-lg border-2 border-grayvar-500 bg-grayvar-300 w-4/5 p-[.375rem] text-white outline-none"
          onChange={addNewTaskHandler}
          value={newTask}
        />
        <button className="flex-1">
          <div className="flex bg-babyBlue-400 hover:bg-babyBlue-500 items-center justify-center gap-1 w-full p-[.5rem] text-white rounded-lg transition-color ease-in-out duration-150">
            <span>Criar</span>
            <PlusCircle size={16} />
          </div>
        </button>
      </form>
    </header>
  );
};
