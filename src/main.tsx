import { TodoProvider } from './context';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
