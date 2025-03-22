import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../store/todoSlice';

function Todos() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    return (
        <>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-4">
                <h2 className="text-xl font-semibold text-gray-300 mb-3">Your Tasks</h2>
                <ul className="space-y-3">
                    {todos.length === 0 ? (
                        <p className="text-gray-400 text-center">No tasks yet. Add some!</p>
                    ) : (
                        todos.map((todo) => (
                            <li
                                key={todo.id}
                                className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
                            >
                                <span className="text-gray-300">{todo.text}</span>
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    ✖
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    )
}

export default Todos