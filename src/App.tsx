import { useCallback, useEffect, useState } from 'react';
import { Header, Todo } from './components';

interface TaskData {
  id: string;
  content: string;
}

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
