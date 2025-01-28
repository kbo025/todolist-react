import { useContext } from 'react';
import '../styles/App.css';
import { TodoItem } from './TodoItem';
import { TodoTittle } from './TodoTittle';
import { TodoList } from './TodoList';
import TodoSearch from './TodoSearch';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TodoContext } from '../contexts/TodoContext';
import { TodoForm } from './TodoForm';

function TodoMachine() {
  const {loading, error, setError, searchedTodos} = useContext(TodoContext);

  return (
    <div className="grid grid-cols-2 gap-4">
      <TodoForm></TodoForm>
      <div>
        <TodoTittle />
        <TodoSearch />
        {
          loading && 'Loading...'
        }
        {
          error 
          && 
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center" role="alert">
            <strong className="font-bold">¡Alerta!</strong>
            <span className="block sm:inline ml-2">{error}</span>
            <button onClick={() => setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <XMarkIcon className="h-6 w-6 text-red-700" />
            </button>
        </div>
        }
        <TodoList>
          {searchedTodos.map(todo =>
            <TodoItem
              key={todo.key}
              id={todo.key}
              text={todo.text}
              completed={todo.completed}/>
          )}
        </TodoList>
      </div>
    </div>
  )
}

export default TodoMachine
