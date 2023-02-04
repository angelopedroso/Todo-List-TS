import { useCallback, useEffect, useState } from 'react';
import { Header, Todo } from './components';

interface TaskData {
  id: string;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const fetchTaskData = useCallback(async () => {
    const res = await fetch(
      'https://todolist-52d6c-default-rtdb.firebaseio.com/Task.json'
    );

    if (!res.ok) throw new Error(`Something went wrong`);

    const data = await res.json();

    const loadedTasks = [];

    for (const key in data) {
      loadedTasks.push({ id: data[key].id, content: data[key].content });
    }

    setTasks(loadedTasks);
  }, []);

  useEffect(() => {
    fetchTaskData();
  }, [fetchTaskData]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header fetchTask={fetchTaskData} />
      <Todo taskItems={tasks} />
    </div>
  );
}

export default App;
