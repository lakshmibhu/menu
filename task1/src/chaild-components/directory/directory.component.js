import React from "react";
import MenuItem from "../menu-item/menu-item.component";
// import Fan from "../../Ass1/images/fan.jpeg";
import { Col, Row, Container } from "react-bootstrap";
import Laptops from "../../Ass1/images/laptops.jpg";
import Mobiles from "../../Ass1/images/mobile.jpg";
import Books from "../../Ass1/images/books.jpg";
import Bottles from "../../Ass1/images/bottles.jpg";
import Beds from "../../Ass1/images/beds.jpg";
import { Link, Route, Switch } from "react-router-dom";
// import FanGrid from "./AllGrids/FanGrid";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "fans",
          id: 1,
          cost: "$20",
          linkUrl: "/fan",
          image: <img src="https://www.kenstar.in/uploads/image/file/568/Klassy-Brown_01.png"  width="300" height="300" />
        },
        {
          name: "laptops",
          id: 2,
          cost: "$150",
          linkUrl: "/laptops",
          image: <img src={Laptops} width="300" height="300" />
        },

        {
          name: "mobiles",
          id: 3,
          cost: "$100",
          linkUrl: "/mobiles",
          image: <img src={Mobiles} width="300" height="300" />
        },
        {
          name: "books",
          id: 4,
          cost: "$10",
          linkUrl: "/books",
          image: <img src={Books} width="300" height="300" />
        },
        {
          name: "bottles",
          id: 5,
          cost: "$5",
          linkUrl: "/bottles",
          image: <img src={Bottles} width="300" height="300" />
        },
        {
          name: "Beds",
          id: 6,
          cost: "$50",
          linkUrl: "/Beds",
          image: <img src={Beds} width="300" height="300" />
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-component">
        <h2>Menu Lists</h2>
        <Container>
          <Row>
            {this.state.categories.map((category) => (
              <Col md="4" className="columns">
                <MenuItem categoryname={category} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Directory;
