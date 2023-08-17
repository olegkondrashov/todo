import { createContext, useContext, useEffect, useState } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos') || '[]')
    );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
  );
}

export function useTodoContext() {
    return useContext(TodoContext);
}