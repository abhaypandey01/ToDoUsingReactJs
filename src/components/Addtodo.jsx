import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/todoSlice';

function Addtodo() {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    placeholder='Enter Your Text Here...'
                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                />
                <button 
                type='submit'
                >Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo