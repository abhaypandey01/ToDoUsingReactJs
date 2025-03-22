import {createSlice, nanoid} from '@reduxjs/toolkit';

const loadTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
}

const initialState = {
    todos: loadTodos(),
}

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                }
                state.todos.push(todo);
                localStorage.setItem("todos", JSON.stringify(state.todos));
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
                localStorage.setItem("todos", JSON.stringify(state.todos));
            },
        }
    }
)

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;