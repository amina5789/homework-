export const selectTotalPrice = (state) => 
    state.cart.cart.reduce((total, product) => total + product.price, 0);
