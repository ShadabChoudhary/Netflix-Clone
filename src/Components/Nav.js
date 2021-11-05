import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavShow(true);
      } else {
        setNavShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${navShow && "show__navbar"}`}>
      <img
        className="netflix__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />

      <img
        className="avatar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
