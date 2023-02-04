import { ListItems } from './ListItems';

export * from './ListItems';

export const TodoList = () => {
  return (
    <div className="flex flex-col gap-3">
      <ListItems />
      <ListItems />
    </div>
  );
};
