import React from "react";
// import MenuItem from "../menu-item/menu-item.component";
// import Fan from "../../Ass1/images/fan.jpeg";
import { Col, Row, Container } from "react-bootstrap";
// import  'bootstrap/dist/css/bootstrap.min.css';
import Grocery from "../../Ass1/images/Grocery.jpg";
import Vegetables from "../../Ass1/images/Vegetables.jpg";
// import Books from "../../Ass1/images/books.jpg";
import Shampoo from "../../Ass1/images/shampoo.jpg";
// import Beds from "../../Ass1/images/beds.jpg";
class Deals extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "Grocery",
          id: 1,
          cost: "60% OFF",
          image: <img src={Grocery} width="300" height="300" />
        },
        {
          name: "Vegetables",
          id: 2,
          cost: "45% OFF",
          image: <img src={Vegetables} width="300" height="300" />
        },

        {
          name: "Shampoo",
          id: 3,
          cost: "40% OFF",
          image: <img src={Shampoo} width="300" height="300" />
        }
      ]
    };
  }
  render() {
    return (
      <div className="Deals-Component">
        <div className="Deals-Items">
          <h1> Deals of the Day</h1>
          {
            <Container>
              <Row className="col">
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[0].name}{" "}
                      {this.state.categories[0].cost}
                    </div>
                    <div style={{ width: "100%" }}>
                      {" "}
                      {this.state.categories[0].image}
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[1].name}{" "}
                      {this.state.categories[1].cost}
                    </div>
                    <div> {this.state.categories[1].image}</div>
                  </div>
                </Col>
                <Col>
                  <div className="DealsImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[2].name}{" "}
                      {this.state.categories[2].cost}
                    </div>
                    <div> {this.state.categories[2].image}</div>
                  </div>
                </Col>
              </Row>
            </Container>
          }
        </div>
      </div>
    );
  }
}
export default Deals;
