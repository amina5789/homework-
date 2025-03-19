import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, addToCartAsync, removeFromCartAsync, clearCartAsync } from "./cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    // Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCartItems = cart.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    {currentCartItems.map(product => (
                        <div key={product.id}>
                            <span>{product.name} - ${product.price} x {product.quantity}</span>
                            <button onClick={() => dispatch(removeFromCartAsync(product.id))}>-</button>
                            <button onClick={() => dispatch(addToCartAsync(product))}>+</button>
                        </div>
                    ))}

                    {/* Пагинация */}
                    <div>
                        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}>
                            ← Предыдущая
                        </button>
                        <span>Страница {currentPage}</span>
                        <button onClick={() => setCurrentPage(prev => (indexOfLastItem < cart.length ? prev + 1 : prev))}
                                disabled={indexOfLastItem >= cart.length}>
                            Следующая →
                        </button>
                    </div>
                </>
            )}

            <button onClick={() => dispatch(clearCartAsync())} disabled={!cart.length}>Очистить</button>
        </div>
    );
};

export default Cart;
