import React from "react";
import Directory from "../../chaild-components/directory/directory.component";
import Menu1 from "../../Ass1/components/Menu1";
import ProductInfo from "../../Ass1/components/Product-info";
import "../../Ass1/components/Product.css";
import Deals from "../../chaild-components/deals/Deals";

function HomePage() {
  return (
    <div className="homepage-component">
      <div align="center">
        <div className="wrapper">
          <div className="product">
            <div className="menu1">
              <Menu1 />
            </div>
            <div className="product-info">
              <ProductInfo />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Directory />
      </div>
      <div>
        <Deals />
      </div>
    </div>
  );
}

export default HomePage;
