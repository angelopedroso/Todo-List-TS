import { ListItems } from './ListItems';

export * from './ListItems';

interface Props {
  taskItems: { id: string; content: string }[];
}

export const TodoList = ({ taskItems }: Props) => {
  return (
    <div className="flex flex-col gap-3 max-h-96  overflow-y-scroll pr-3 task-content">
      {taskItems.map(task => {
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
