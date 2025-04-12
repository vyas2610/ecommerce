import React from "react";

const ProductPage = (props) => {
  console.log(props);
  return (
    <div className="product">
      <div className="hoverEffect">
        <div className="imgPro">
          <img src={props.prosrc} alt="Sample" />
        </div>
        <p>Product Name : {props.proname} </p>
        <p style={{ textAlign: "justify" }}>Prodcct Desc : {props.prodesc} </p>
        <p>
          <button>Show More</button>
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
