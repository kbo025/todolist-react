import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoSearch = () => {
    const {search, setSearch} = useContext(TodoContext);

    return (
        <div className="p-4 max-w-md mx-auto">
        <input
            type="text"
            placeholder="Buscar..."
            value = {search}
            onChange = { event => setSearch(event.target.value) }
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        </div>
    );
};

export default TodoSearch;
