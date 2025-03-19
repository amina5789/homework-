import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 URL сервера JSON
const API_URL = "http://localhost:5000";

// 🔹 Асинхронное получение корзины
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
    const response = await fetch(`${API_URL}/cart`);
    return response.json();
});

// 🔹 Асинхронное добавление товара в корзину
export const addToCartAsync = createAsyncThunk("cart/addToCart", async (product) => {
    const response = await fetch(`${API_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...product, quantity: 1 })
    });
    return response.json();
});

// 🔹 Асинхронное удаление товара
export const removeFromCartAsync = createAsyncThunk("cart/removeFromCart", async (id) => {
    await fetch(`${API_URL}/cart/${id}`, { method: "DELETE" });
    return id;
});

// 🔹 Очистка корзины
export const clearCartAsync = createAsyncThunk("cart/clearCart", async () => {
    await fetch(`${API_URL}/cart`, { method: "DELETE" });
    return [];
});

// 🔹 Slice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [], // Теперь продукты загружаются с сервера
        cart: [],
        status: "idle", // Для обработки состояний загрузки
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
