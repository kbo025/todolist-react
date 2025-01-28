import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoTittle = () => {
    const {completed, total} = useContext(TodoContext);
    return (<>
        <h2 className="text-3xl">
            Has completado <span className="font-bold">{completed}</span> de <span  className="font-bold">{total}</span> TODOS
        </h2>
    </>);
}
 
export { TodoTittle };