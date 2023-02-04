import { useContext } from 'react';
import { TodoContext } from '../../context';
import { ListItems } from './ListItems';

export * from './ListItems';

export const TodoList = () => {
  const { tasks } = useContext(TodoContext);

  return (
    <div className="flex flex-col gap-3 max-h-96  overflow-y-scroll pr-3 task-content">
      {tasks.length > 0 &&
        tasks.map(task => {
          //prettier-ignore
          return (
          <ListItems 
            key={task.id} 
            content={task.content} 
            id={task.id} 
          />
        );
        })}
    </div>
  );
};
