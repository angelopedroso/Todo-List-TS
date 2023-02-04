import Logo from '../assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';

export const Header = () => {
  return (
    <header className="flex flex-col justify-between items-center bg-grayvar-500 h-1/5 w-full">
      <img src={Logo} alt="Logo" className="h-12 mt-10" />
      <form className="flex justify-between gap-2 w-2/4 max-w-xl h-10 -mb-5">
        <input
          type="text"
          name="newTodo"
          placeholder="Adicione uma nova tarefa"
          className="rounded-lg border-2 border-grayvar-500 bg-grayvar-300 w-4/5 p-[.375rem] text-white outline-none "
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
