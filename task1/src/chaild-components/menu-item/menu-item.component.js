import React from "react";

function MenuItem(props) {
  return (
    <div className="menuitem-component">
      <h3>{props.categoryname.name}</h3>
      <img src={props.categoryname.image} className="menu-img" />
      <p>
        {props.categoryname.name} {props.categoryname.cost}
      </p>
    </div>
  );
}

export default MenuItem;
