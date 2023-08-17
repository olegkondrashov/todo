import { useTodoContext } from "../../context/context";
import Button from "../buttons/buttons.component";

import './list-item.styles.scss'

const ListItems = () => {

    const {todos, setTodos} = useTodoContext();

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
            setTodos(updatedTodos);
    };

    const toggleDone = (e) => {
        e.target.classList.toggle('done')
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} onClick={(e) => toggleDone(e)}>
                    <div className='todo-text'> {todo} </div>
                    <Button 
                        className='button button__delete' 
                        onClick={() => deleteTodo(index)}
                        />
                </li>
            ))}
        </ul>
    )
}

export default ListItems;