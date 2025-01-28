import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getTodos, createTodo } from "../services/api";

const TodoContext = createContext();
const TodoProvider = ({children}) => {
    const [search, setSearch] = useState('');
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [error, setError] = useLocalStorage('error', null);
    const [loading, setLoading] = useLocalStorage('loading', true);
  
    const completed = todos.filter(e => !!e.completed).length;
    const total = todos.length;
    const searchedTodos = todos.filter(td => td.text.toLowerCase().includes(search.toLocaleLowerCase()));
  
    useEffect(() => {
      setError(false);
      setLoading(true);
      setTodos([]);
      getTodos()
        .then(data => {
          setLoading(false);
          setTodos(data);
        })
        .catch(e => {
          setLoading(false);
          setError('Error fetching todos!');
        });
    }, []);

    const createNewTodo = (todo) => {
      setError(false);
      setLoading(true);
      createTodo(todo)
        .then(data => {
          setLoading(false);
          const {text} = data;
          todos.push({key: `${todos.length + 1}`, completed: false, text});
          setTodos(todos);
        })
        .catch(e => {
          console.log(e);
          setLoading(false);
          setError('Error creating todo!');
        });
    }
  
    const changeStateTodo = (key) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex(td => td.key == key);
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    }
  
    const deleteTodo = (key) => {
      const newTodos = [...todos];
      const index = newTodos.findIndex(td => td.key == key);
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  

    return (<TodoContext.Provider value={{
        total,
        completed,
        search,
        setSearch,
        error,
        setError,
        loading,
        setLoading,
        searchedTodos,
        changeStateTodo,
        deleteTodo,
        createNewTodo,
    }}>
        {children}
    </TodoContext.Provider>);
}

export { TodoContext, TodoProvider };