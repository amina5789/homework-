import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await fetch(API_URL);
    return response.json();
});

export const addTodoAsync = createAsyncThunk("todos/addTodo", async (text) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, completed: false })
    });
    return response.json();
});

export const removeTodoAsync = createAsyncThunk("todos/removeTodo", async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
});

export const toggleTodoAsync = createAsyncThunk("todos/toggleTodo", async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const todo = await response.json();
    
    const updatedTodo = { ...todo, completed: !todo.completed };
    
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo)
    });

    return updatedTodo;
});

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        filter: "all",
        status: "idle", 
        error: null
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.allTodos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.allTodos.push(action.payload);
            })
            .addCase(removeTodoAsync.fulfilled, (state, action) => {
                state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload);
            })
            .addCase(toggleTodoAsync.fulfilled, (state, action) => {
                const index = state.allTodos.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.allTodos[index] = action.payload;
                }
            });
    }
});

export const { setFilter } = todoSlice.actions;
export default todoSlice.reducer;
