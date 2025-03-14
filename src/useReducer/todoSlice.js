import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        filter: "all", 
    },
    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.allTodos.find(todo => todo.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        removeTodo: (state, action) => {
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { addTodo, toggleTodo, removeTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
