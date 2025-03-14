import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mainProductsData } from "../../mock/main.mock";
export function ProuductDEtail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentProduct, setCurentProduct] = useState({});
  console.log(id);

  useEffect(() => {
    if (id) {
      const product = mainProductsData.find((item) => item.id === Number(id));
      if (product) setCurentProduct(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(currentProduct);
  const addToCart = ()=>{
navigate('/cart',{state:{product_id:id}})
  }
  return (
    <main>
      <button onClick={()=>navigate(-1)}>вернуться назад</button>
      <h1> СТРААНИЦА конкретного продукта</h1>
      <h3>{currentProduct.title}</h3>
      <p>{currentProduct.price}</p>
      <img src={currentProduct.img} alt="product-image" width={500} />
      <button onClick={addToCart}>Добваить в корзину</button>
    </main>
  );
}
