import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import cartReducer from "./cartSlice";
import todoReducer from "./todoSlice";


export const store = configureStore({
    reducer: {
        counter: todoSlice.reducer,
        cart: cartReducer,
        todos: todoReducer,
    }
})