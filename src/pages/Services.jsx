import React from "react";
// import Card from "/components/Card";
import Card from "../components/Card";
import sampleImg from "/images/jayesh_png.png";
import WC from "/images/wc.jpg";
import PS from "/images/g02.jpg";
import BP from "/images/bloodpainting.jpg";
import RG from "/images/rangoli.jpg";
import SK from "/images/sketch.jpg";
import OP from "/images/g08.jpg";
import tattoo from "/images/g04.jpg";








function Services() {
  return (
    <div className="container py-5 d-flex gap-4 flex-wrap justify-content-center">
      <Card
        title="Tattoo Design"
        text="Creative and custom tattoo designs with precision and detail."
        image={tattoo}
      />
      <Card
        title="Oil Painting"
        text="Timeless and expressive oil paintings crafted with depth, texture, and vibrant detail."
        image={OP}
      />
      <Card
        title="Watercolour Painting"
        text="Delicate and vibrant watercolour paintings with fluid strokes and artistic charm."
        image={WC}
      />

            <Card
        title="Portrait Sketching"
        text="B&W and colour portrait sketching"
        image={SK}
      />

            <Card
        title="Pen Sketch"
        text="Portrait pen Sketch"
        image={PS}
      />

                  <Card
        title="Rangoli"
        text="Artistic face designs with vibrant colors and fine detail."
        image={RG}
      />
                  <Card
        title="Blood painting"
        text="Portrait blood painting"
        image={BP}
      />
    </div>
  );
}

export default Services;
