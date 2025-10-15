
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "/images/imggg1.jpg";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container">
//         {/* Logo */}
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Tattoo Studio" height="45" className="logo-img" />
//         </Link>

//         {/* Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu */}
//         <div className="collapse navbar-collapse" id="navMenu">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/services">Services</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/gallery">Gallery</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/booking">Book Now</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "/images/imggg1.jpg";
// import "./Navbar.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <- needed for hamburger

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container">
//         {/* Logo */}
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Tattoo Studio" height="45" className="logo-img" />
//         </Link>

//         {/* Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu */}
//         <div className="collapse navbar-collapse" id="navMenu">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/services">Services</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/gallery">Gallery</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact</Link>
//             </li>
//             {/* Removed Book Now */}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
////////////////////////////////////////////
////////////////////original down ///////////////////////
//////////////////////////////////////////
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "/images/imggg1.jpg";
// import "./Navbar.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for hamburger

// function Navbar() {
//   // Closes the Bootstrap collapse after clicking a link
//   const handleLinkClick = () => {
//     const navMenu = document.getElementById("navMenu");
//     if (navMenu && navMenu.classList.contains("show")) {
//       // Bootstrap Collapse API
//       const collapse = new window.bootstrap.Collapse(navMenu, {
//         toggle: false,
//       });
//       collapse.hide();
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container">
//         {/* Logo */}
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Tattoo Studio" height="45" className="logo-img" />
//         </Link>

//         {/* Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//           aria-controls="navMenu"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu */}
//         <div className="collapse navbar-collapse custom-collapse" id="navMenu">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/" onClick={handleLinkClick}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about" onClick={handleLinkClick}>
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/services" onClick={handleLinkClick}>
//                 Services
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/gallery" onClick={handleLinkClick}>
//                 Gallery
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "/images/log2.png";
import logo from "/images/mainlg.png";

import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const location = useLocation(); // get current path

  const handleLinkClick = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu && navMenu.classList.contains("show")) {
      const collapse = new window.bootstrap.Collapse(navMenu, { toggle: false });
      collapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Tattoo Studio" height="45" className="logo-img" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse custom-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active-link" : ""
                }`}
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active-link" : ""
                }`}
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/services" ? "active-link" : ""
                }`}
                to="/services"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/gallery" ? "active-link" : ""
                }`}
                to="/gallery"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active-link" : ""
                }`}
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
