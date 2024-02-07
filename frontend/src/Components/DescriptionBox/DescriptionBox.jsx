import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (143)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quos? Necessitatibus quisquam expedita obcaecati ipsam a, laboriosam
          blanditiis ex alias neque non quis amet iure adipisci perspiciatis
          cumque assumenda illum!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
