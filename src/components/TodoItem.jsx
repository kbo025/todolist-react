import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { CheckCircleIcon,  MinusCircleIcon, TrashIcon} from '@heroicons/react/24/solid';

const TodoItem = (props) => {
    const {changeStateTodo, deleteTodo} = useContext(TodoContext);
    const {text, completed, id} = props;
    return (<>
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <span className={'text-sm/6 font-semibold ' + (completed ? 'text-green-500' : '')}>{
                    completed 
                        ? <CheckCircleIcon
                            className="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            onClick={() => changeStateTodo(id)}
                            stroke="currentColor"/>
                        : <MinusCircleIcon
                            className="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            onClick={() => changeStateTodo(id)}
                            stroke="currentColor"/>
                }</span>
                <p className={'mt-1 truncate ' + (completed ? 'line-through' : '') }>{text}</p>
            </div>
            <TrashIcon
                className="h-6 w-6 text-red-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                onClick={() => deleteTodo(id)}
                stroke="currentColor" />
        </li>
    </>);
}
 
export { TodoItem };