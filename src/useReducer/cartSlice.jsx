import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [
            { id: 1, name: "Laptop", price: 1000 },
            { id: 2, name: "Phone", price: 500 },
            { id: 3, name: "Headphones", price: 100 },
        ],
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product) state.cart.push(product);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(p => p.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
