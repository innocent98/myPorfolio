import "./products.scss";
import Product from "../product/Product";
import { products } from "../../data";

const Products = ({setSingle, single}) => {
  return (
    <div className="products">
      {products.map((p) => (
        <Product p={p} key={p.id} setSingle={setSingle} single={single} />
      ))} 
    </div>
  );
};

export default Products;
