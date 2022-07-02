import "./style.css";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow(show));
    };
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
        alt="Netflix"
      />
      <img
        className="navAvatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Your profile"
      />
    </div>
  );
}

export default Navbar;
