import { useNavigate } from "react-router-dom";
import { mainProductsData } from "../../mock/main.mock";
import "./Main.css";

export const Main = () => {
  const redirect = useNavigate();

  return (
    <main>
      <h1>Главная страница</h1>

      <section>
        <h2 className="main-heading">Хит продаж</h2>

        <div className="products-list">
          {mainProductsData.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => redirect(`/product/${product.id}`)}>
                
              <img src={product.img} alt="produc-image" />
              <p className="product-card_title">{product.title}</p>
              <p className="product-card_price">Цена: {product.price} сом</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
