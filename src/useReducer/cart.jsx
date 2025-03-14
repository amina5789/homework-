import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./cartSlice";
import { selectTotalPrice } from "./selectors";

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const cart = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <span>{product.name} - ${product.price}</span>
                    <button onClick={() => dispatch(addToCart(product.id))}>добавить</button>
                </div>
            ))}

            <h2>Cart</h2>
            {cart.length === 0 ? <p>Пусто</p> : cart.map(product => (
                <div key={product.id}>
                    <span>{product.name} - ${product.price}</span>
                    <button onClick={() => dispatch(removeFromCart(product.id))}>удалить</button>
                </div>
            ))}

            <h3>Цена: ${totalPrice}</h3>
            <button onClick={() => dispatch(clearCart())} disabled={!cart.length}>очистить</button>
        </div>
    );
};

export default Cart;
