import React from "react";
// import Card from "/components/Card";
import Card from "../components/Card";
import sampleImg from "/images/jayesh_png.png";

function Services() {
  return (
    <div className="container py-5 d-flex gap-4 flex-wrap justify-content-center">
      <Card
        title="Tattoo Design"
        text="Creative and custom tattoo designs with precision and detail."
        image={sampleImg}
      />
      <Card
        title="Oil Painting"
        text="Timeless and expressive oil paintings crafted with depth, texture, and vibrant detail."
        image={sampleImg}
      />
      <Card
        title="Watercolour Painting"
        text="Delicate and vibrant watercolour paintings with fluid strokes and artistic charm."
        image={sampleImg}
      />

            <Card
        title="Portrait Sketching"
        text="B&W and colour portrait sketching"
        image={sampleImg}
      />

            <Card
        title="Pen Sketch"
        text="Portrait pen Sketch"
        image={sampleImg}
      />

                  <Card
        title="Rangoli"
        text="Artistic face designs with vibrant colors and fine detail."
        image={sampleImg}
      />
    </div>
  );
}

export default Services;
