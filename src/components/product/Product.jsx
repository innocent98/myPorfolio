import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./product.scss";

const Product = ({ p, setSingle, single }) => {
  const [fav, setFav] = useState(p.favorite);
  const [data, setData] = useState("");

  const handleFav = () => {
    setFav(!fav);
    if (!fav) {
      toast.info("Product added to your favorite products");
    } else {
      toast.info("Product removed from your favorite list");
    }
  };

  const handleSingleProduct = () => {
    setSingle(true);
    setData(p);
  };

  const closeSingleProduct = () => {
    setSingle(false);
    setData("");
  };

  return (
    <div className="product">
      <ToastContainer position="bottom-right" />
      <div className={"productCard " + (single && "sing")}>
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
        <i
          className="fa-solid fa-ellipsis icon"
          onClick={handleSingleProduct}
        ></i>
      </div>

      {data && (
        <div className={"singleProductD " + (single && "sing")}>
          <div className="singleCard">
            <div className="singleLeft">
              <div className="singleImg">
                <img src={data.img} alt="" />
              </div>
            </div>
            <div className="singleRight">
              <div className="pTitle">
                <div className="left">
                  <h3>{data.name}</h3>
                  <span>Product tagline text</span>
                </div>
                <div className="right">${data.price}.00</div>
              </div>
              <div className="pDetails">
                {data.desc}
              </div>
              <Link to="" className="chatBtn">
                Message seller
              </Link>
            </div>
            <i
              className="fa-solid fa-xmark icon"
              onClick={closeSingleProduct}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
