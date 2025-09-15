import React from "react";
import "./Card.css";

function Card({ title, text, image, children }) {
  return (
    <div className="custom-card">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {text && <p className="card-text">{text}</p>}
        {children}
      </div>
    </div>
  );
}

export default Card;
