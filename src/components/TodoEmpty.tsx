import Clipboard from '../assets/Clipboard.svg';

export const TodoEmpty = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center px-16 py-6">
        <img src={Clipboard} alt="Todo List Empty" />
        <div className="flex flex-col text-center">
          <span className="font-bold text-gray-400">
            Você ainda não tem tarefas cadastradas
          </span>
          <span className="font-light text-gray-400">
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
      </div>
    </>
  );
};
