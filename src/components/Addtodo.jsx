import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/todoSlice';

function Addtodo() {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <form onSubmit={addTodoHandler} className="flex gap-3">
                <input
                    type="text"
                    placeholder='Enter Your Text Here...'
                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                    className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                type='submit'
                className="px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                >Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo