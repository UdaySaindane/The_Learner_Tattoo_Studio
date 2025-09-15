
import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="grid">
        {/* Long card */}
        <div className="card long">
          <img src="/images/jayesh_png.png" alt="Long Card" />
        </div>

        {/* Short cards */}
        <div className="card short">
          <img src="/images/about01.jpg" alt="Short Card 1" />
        </div>
                       {/* Another Long card example */}
        <div className="card long">
          <img src="/images/jayesh_png.png" alt="Long Card 2" />
        </div>
        <div className="card short">
          <img src="/images/aboutt03.jpg" alt="Short Card 2" />
        </div>

        

 
        <div className="card short">
          <img src="/images/about02.jpg" alt="Short Card 3" />
        </div>
        {/* Long card */}
        <div className="card long">
          <img src="/images/jayesh_png.png" alt="Long Card" />
        </div>


        {/* More short cards */}
        <div className="card short">
          <img src="/images/about01.jpg" alt="Short Card 4" />
        </div>
                        {/* Long card */}
        <div className="card long">
          <img src="/images/jayesh_png.png" alt="Long Card" />
        </div>
        <div className="card short">
          <img src="/images/aboutt03.jpg" alt="Short Card 5" />
        </div>

        <div className="card short">
          <img src="/images/about02.jpg" alt="Short Card 6" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
