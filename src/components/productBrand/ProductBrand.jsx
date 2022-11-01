import "./productBrand.scss";

const ProductBrand = ({ p }) => {
  return (
    <div className="product">
      <div className="productCard">
        <div className="brandImg">
          <img src={p.img} alt="" />
        </div>
        <div className="brandDetails">
          <div className="productName">{p.name}</div>
          <div className="productDesc">{p.desc}</div>
          <div className="brandLike">
            <span>
              10 <span>PRODUCTS</span>
            </span>
            <svg height="30" width="500">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="180"
                style={{ stroke: "lightGray", strokeWidth: "2" }}
              />
            </svg>
            <span>
              800 <span>SALES</span>
            </span>
            <svg height="30" width="500">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="180"
                style={{ stroke: "lightGray", strokeWidth: "2" }}
              />
            </svg>
            <span>
              4k <span>LIKES</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrand;
