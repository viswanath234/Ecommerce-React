import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(143)</p>
        </div>
        <div className="productdisplayright-prices">
          <div className="productdisplay-right-price-old">
            &#8377;{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            &#8377;{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          ultimate must-have for those who appreciate the perfect blend of
          fashion and function. Elevate your wardrobe and make a statement
          wherever you go. Grab yours now and embrace the warmth and style you
          deserve!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span>Women , T-Shirt, Crop top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
