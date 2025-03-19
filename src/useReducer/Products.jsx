import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";
import { addToCartAsync } from "./cartSlice";

const Products = () => {
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <h1>Товары</h1>
            {products.map(product => (
                <div key={product.id}>
                    <span>{product.name} - ${product.price}</span>
                    <button onClick={() => dispatch(addToCartAsync(product))}>Добавить в корзину</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
