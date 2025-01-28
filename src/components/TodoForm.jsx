import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { TodoContext } from '../contexts/TodoContext';
import { PlusIcon} from '@heroicons/react/24/solid';

const TodoForm = () => {
    const {createNewTodo} = useContext(TodoContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        createNewTodo(data);
        reset();
    };

    return ( <>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto p-4 bg-white shadow-md rounded-md">
            <label className="block text-sm font-medium text-gray-700">Escribe tu nuevo todo</label>
            <textarea
                {...register('text', { required: 'El texto del todo es requerido.' })}
                placeholder="Cortar cebollas..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {errors.text && <p className="mt-2 text-sm text-red-600">{errors.text.message}</p>}
            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <PlusIcon aria-hidden="true" className="h-5 w-5 text-blue-500" />
            </button>
        </form>
    </>);
}
 
export { TodoForm };