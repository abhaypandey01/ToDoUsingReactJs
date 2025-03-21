import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../store/todoSlice';

function Todos() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    return (
        <>
            <div className='text-gray-600'>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                onClick={() => dispatch(removeTodo(todo.id))}
                >X</button>
                </li>
            ))}
        </>
    )
}

export default Todos