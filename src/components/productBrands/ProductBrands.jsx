import "./productBrands.scss";
import { products } from "../../data";
import ProductBrand from "../productBrand/ProductBrand";

const ProductBrands = () => {
  return (
    <div className="products">
      {products.map((p) => (
        <ProductBrand p={p} key={p.id} />
      ))}
    </div>
  );
};

export default ProductBrands;
