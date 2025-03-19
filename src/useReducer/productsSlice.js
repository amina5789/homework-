import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
                state.error = "Ошибка загрузки товаров";
            });
    }
});

export default productsSlice.reducer;
