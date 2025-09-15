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
        title="Piercing"
        text="Safe and stylish piercings with professional care."
        image={sampleImg}
      />
      <Card
        title="Consultation"
        text="Personalized sessions to bring your ideas to life."
        image={sampleImg}
      />
    </div>
  );
}

export default Services;
