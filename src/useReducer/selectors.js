export const selectTotalPrice = (state) =>
    state.cart.cart.reduce((total, product) => total + product.price * product.quantity, 0);

export const selectCartCount = (state) =>
    state.cart.cart.reduce((total, product) => total + product.quantity, 0);
