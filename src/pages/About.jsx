
// import React from "react";
// import profileImg from "/images/jayesh_png.png"; // replace with actual profile img
// import "./About.css";

// function About() {
//   return (
//     <section className="about-section py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left: Profile Image */}
//           <div className="col-md-4 text-center mb-4 mb-md-0">
//             <img src={profileImg} alt="Profile" className="about-img" />
//           </div>

//           {/* Right: About Info */}
//           <div className="col-md-8">
//             <div className="about-card p-4">
//               <h2 className="about-title mb-4">About Me</h2>
//               <p className="about-text">
//                 I am <span className="highlight">Jayesh Saindane</span>, a passionate tattoo
//                 artist and creative learner. My journey blends <b>art</b>,
//                 <b> precision</b>, and <b>dedication</b> to craft designs that
//                 truly represent individuality.
//               </p>

//               <div className="about-info mt-4">
//                 <div className="info-item">
//                   <h5>📜 Certifications</h5>
//                   <p>Tattoo Artistry Diploma, Advanced Piercing Techniques</p>
//                 </div>
//                 <div className="info-item">
//                   <h5>📍 Address</h5>
//                   <p>Near XYZ Street, Pune, India</p>
//                 </div>
//                 <div className="info-item">
//                   <h5>📧 Contact</h5>
//                   <p>jayesh@example.com | +91 98765 43210</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Card */}
//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="bottom-card p-4 text-center">
//               <h3 className="bottom-card-title">The Learner Tattooz</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import React from "react";
import profileImg from "/images/jayesh_png.png";
import profileImg1 from "/images/about01.jpg";

import profileImg2 from "/images/aboutt03.jpg";

import profileImg3 from "/images/about02.jpg";

// replace with actual profile img
import "./About.css";

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={profileImg} alt="Profile" className="about-img" />
          </div>

          {/* Right: About Info */}
          <div className="col-md-8">
            <div className="about-card p-4">
              <h2 className="about-title mb-4">About Me</h2>
              <p className="about-text">
                I am <span className="highlight">Jayesh Saindane</span>, a passionate tattoo
                artist and creative learner. My journey blends <b>art</b>,
                <b> precision</b>, and <b>dedication</b> to craft designs that
                truly represent individuality.
              </p>

              <div className="about-info mt-4">
                <div className="info-item">
                  <h5>📜 Certification</h5>
                  <p>Intermediate Course in Taattoo Art</p>
                </div>
                <div className="info-item">
                  <h5>📍 Address</h5>
                  <p>Sharad Nagar, Collector zone, Malegaon (Nashik)</p>
                </div>
                <div className="info-item">
                  <h5>📧 Contact</h5>
                  <p>saindanejayesh49@gmail.com |<br /> +91 88306 97782</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with 3 Images */}
        <div className="row mt-5 about-gallery">
          <div className="col-md-4 mb-4">
            <div className="gallery-card left">
              <img src={profileImg1} alt="Gallery 1" className="gallery-img" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="gallery-card center">
              <img src={profileImg2} alt="Gallery 2" className="gallery-img" />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="gallery-card right">
              <img src={profileImg3} alt="Gallery 3" className="gallery-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
