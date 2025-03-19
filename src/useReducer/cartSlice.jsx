import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
    const response = await fetch(`${API_URL}/cart`);
    return response.json();
});

export const addToCartAsync = createAsyncThunk("cart/addToCart", async (product) => {
    const response = await fetch(`${API_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...product, quantity: 1 })
    });
    return response.json();
});

export const removeFromCartAsync = createAsyncThunk("cart/removeFromCart", async (id) => {
    await fetch(`${API_URL}/cart/${id}`, { method: "DELETE" });
    return id;
});

export const clearCartAsync = createAsyncThunk("cart/clearCart", async () => {
    await fetch(`${API_URL}/cart`, { method: "DELETE" });
    return [];
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [], 
        cart: [],
        status: "idle", 
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                state.cart.push(action.payload);
            })
            .addCase(removeFromCartAsync.fulfilled, (state, action) => {
                state.cart = state.cart.filter(item => item.id !== action.payload);
            })
            .addCase(clearCartAsync.fulfilled, (state) => {
                state.cart = [];
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.error = "Ошибка загрузки корзины";
            });
    }
});

export default cartSlice.reducer;
