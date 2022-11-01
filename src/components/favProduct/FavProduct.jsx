import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./favProduct.scss";

const FavProduct = ({ p }) => {
  const [fav, setFav] = useState(p.favorite);

  const handleFav = () => {
    setFav(!fav);
    if (!fav) {
      toast.info("Product removed from your favorite products");
    }
  };

  return (
    <div className="product">
      <ToastContainer position="bottom-right" />
      <div className="productCard">
        <div className="productImg">
          <img src={p.img} alt="" />
        </div>
        <div className="productDetails">
          <div className="productName">{p.name}</div>
          <div className="productDesc">{p.desc}</div>
          <div className="price">
            <i
              class={"fa-regular fa-heart " + (fav && "fa-solid fa-heart fav")}
              onClick={handleFav}
            ></i>
            <span>${p.price}.00</span>
          </div>
        </div>
        <i className="fa-solid fa-ellipsis icon"></i>
      </div>
    </div>
  );
};

export default FavProduct;
