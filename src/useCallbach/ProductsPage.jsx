import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductsPage = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    // Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Вычисляем товары для текущей страницы
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <h1>Товары</h1>
            {currentProducts.map(product => (
                <div key={product.id}>
                    <span>{product.name} - ${product.price}</span>
                    <button onClick={() => dispatch(addToCart(product.id))}>Добавить</button>
                </div>
            ))}

            <div>
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    ← Предыдущая
                </button>
                <span>Страница {currentPage}</span>
                <button onClick={() => setCurrentPage(prev => (indexOfLastItem < products.length ? prev + 1 : prev))}
                        disabled={indexOfLastItem >= products.length}>
                    Следующая →
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;
