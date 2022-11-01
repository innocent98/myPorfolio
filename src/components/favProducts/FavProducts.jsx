import "./favProducts.scss";
import FavProduct from "../favProduct/FavProduct";
import { products } from "../../data";

const FavProducts = () => {
  return (
    <div className="products">
      {products.map((p) => (
        <>{p.favorite && <FavProduct p={p} key={p.id} />}</>
      ))}
    </div>
  );
};

export default FavProducts;
