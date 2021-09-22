import React, { useState } from "react";
import { RatingStar } from "./RatingStar";

function ProductCard({ mobile, handleAddToCart, handleDelete, findProduct }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="card">
      <img src={mobile.image} className="card-img-top" alt="mobile-pic" />
      <div className="card-body">
        <h5 className="card-title">
          {mobile.name} {mobile.model}
        </h5>
        <RatingStar rating={mobile.rating} />
        <p className="card-text">
          {mobile.currency}
          {mobile.price}
        </p>
        <button
          className="btn btn-success"
          disabled={isClicked}
          onClick={() => {
            handleAddToCart(mobile.id);
            setIsClicked(true);
          }}
        >
          Add to Cart
        </button>
        {
          isClicked ?  <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(mobile.id);
            setIsClicked(false);
          }}
        >
          Delete from Cart
        </button> : ''
        }
      </div>
    </div>
  );
}

export default ProductCard;
