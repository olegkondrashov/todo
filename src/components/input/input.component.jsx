import {  useState } from 'react';
import Button from '../buttons/buttons.component';
import './input.styles.scss'
import {  useTodoContext } from '../../context/context';

import './input.styles.scss'

const Input = () => {


    const [input, setInput] = useState('');
    const {todos, setTodos} = useTodoContext();


    const addTodo = () => {
        if (input !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };
    
    const addTodoByEnter = (e) => {
        if (e.key === 'Enter') {
           addTodo();
        }
    };

    return (
        <div className="input-box">
                <input 
                    type="text" 
                    value={input}  
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={addTodoByEnter}
                    placeholder='Enter a task'/>
                    <Button 
                        className='button button__add' 
                        onClick={addTodo} 
                        text={'Add'} 
                    />
            </div>
    )
}

export default Input;