import { useState } from 'react';
import { TodoEmpty } from './TodoEmpty';
import { TodoList } from './TodoList';

const infoCss = 'flex gap-2';
const counterCss =
  'text-center text-white font-normal bg-grayvar-300 min-w-[1.25rem] rounded-lg px-2';

export const Todo = () => {
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(true);

  return (
    <main className="flex flex-col justify-center items-center ">
      <div className="w-2/4 max-w-xl mt-16">
        <div className="flex justify-between font-bold mb-6">
          <div className={infoCss}>
            <span className="text-blue-500">Tabelas Criadas</span>
            <span className={counterCss}>0</span>
          </div>
          <div className={infoCss}>
            <span className="text-purple-500">Concluídas</span>
            <span className={counterCss}>0</span>
          </div>
        </div>
        {isArrayEmpty && <TodoEmpty />}
        {!isArrayEmpty && <TodoList />}
      </div>
    </main>
  );
};
