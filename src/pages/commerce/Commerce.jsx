import "./commerce.scss";
import Products from "../../components/products/Products";
import { useState } from "react";
import FavProducts from "../../components/favProducts/FavProducts";
import ProductBrands from "../../components/productBrands/ProductBrands";

const Commerce = () => {
  const [tab, setTab] = useState(true);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [single, setSingle] = useState(false);

  const handleTab = () => {
    setTab(true);
    setTab1(false);
    setTab2(false);
  };
  const handleTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab(false);
  };
  const handleTab2 = () => {
    setTab2(true);
    setTab1(false);
    setTab(false);
  };

  return (
    <div className="commerce">
      <div className={"main " + (single && "sing")}>
        <div className="top">
          <div className="left">
            <div className="storeLogo">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p.jpg"
                alt=""
              />
            </div>
            <div className="storeTitle">
              <h3>Iconic</h3>
              <span>Quick fashion for everyone</span>
            </div>
          </div>
          <div className="mid">
            <div className="overview">Overview</div>
            <div className="brandOverview">
              <div className="bo">
                <h3>252</h3>
                <span>Products</span>
              </div>
              <hr />
              <div className="bo">
                <h3>4.7k</h3>
                <span>Likes</span>
              </div>
              <hr />
              <div className="bo">
                <h3>2.1k</h3>
                <span>Followers</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="about">About Us</div>
            <div className="content">
              We are an independent fashion store and we sale finely designed
              and handcrafted outfits for the best price. Browse our collection
              and discover our products.
            </div>
          </div>
        </div>

        <div className="productSection">
          <div className="tabs">
            <div className={"tab " + (tab && "active")} onClick={handleTab}>
              Products
            </div>
            <div className={"tab " + (tab1 && "active")} onClick={handleTab1}>
              Brands
            </div>
            <div className={"tab " + (tab2 && "active")} onClick={handleTab2}>
              Favorites
            </div>
          </div>
          <div className="prod">
            <div className={tab && "prodTab"}>{tab && <Products setSingle={setSingle} single={single} />}</div>
            <div className={tab1 && "prodTab"}>{tab1 && <ProductBrands />}</div>
            <div className={tab2 && "prodTab"}>{tab2 && <FavProducts />}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Commerce;
