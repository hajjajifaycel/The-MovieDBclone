import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="logodesign">
        <img className="nav_logo"  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb logo"></img>
      </div>
      <div className="title1">
          <div>Home</div>
      </div>
        <div className="title2">
          <div>Shows</div>
        </div>
        <div className="title3">
          <div>Movies</div>
        </div>
        <div className="title4">
          <div>Kids</div>
        </div>
        
      <img
        className="nav_avatar"
        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
        alt="User Logo"
      />
    </div>
  )
}

export default Nav
