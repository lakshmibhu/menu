import React from "react";
import iphone6 from "../images/iphone6.jpeg";
function ProductInfo() {
  return (
    <div className="product-info">
      <div class="product-img">
        <img src={iphone6} alt="iphone1" />
      </div>
      <div className="product-content">
        <div>
          Hi,<span className="col">User</span>
        </div>
        <div style={{ wordWrap: "no-wrap" }}>thank you for your purchase! </div>
        <div className="product-details">
          <div className="col">
            <div>Model</div>
            <div>Color</div>
            <div>Storage</div>
          </div>
          <div>
            <div>IPhone 6S</div>
            <div>Rose Gold</div>
            <div>64GB</div>
          </div>
        </div>
        <div className="total">
          <div>Total</div>
          <div style={{ "font-size": "30px" }}>$749.00</div>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
