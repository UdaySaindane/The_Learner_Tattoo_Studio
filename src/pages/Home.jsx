
import React, { useEffect, useState } from "react";
import hero from "/images/jayesh_png.png"; // person PNG (transparent preferred)
import "./Home.css";

function Home() {
  const texts = [
    "The Learner Tattooz",
    "Jayesh Saindane"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    const words = texts[currentIndex].split(" ");
    let i = -1;

    const interval = setInterval(() => {
      if (i < words.length) {
        setDisplayedWords((prev) => [...prev, words[i-1]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedWords([]);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 5000); // hold for 5s
      }
    }, 600); // word reveal speed

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="home-hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left side text */}
          <div className="col-md-6 text-start">
            <h1 className="brand-title">
              {displayedWords.map((word, index) => (
                <span key={index} className="word-span">{word}&nbsp;</span>
              ))}
            </h1>
            <p className="brand-tagline">
              Becoming a Tattoo Artist <br /> with FAITH
            </p>
            <button className="btn-gold mt-3">Artist Jayesh</button>
          </div>

          {/* Right side image */}
          <div className="col-md-6 position-relative">
            <div className="image-wrapper">
              <img src={hero} alt="Tattoo Art" className="hero-image" />
              <div className="gold-stripes"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
