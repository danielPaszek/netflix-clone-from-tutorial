import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./assets/Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <div className="navbar_content">
        <img
          onClick={() => history.push("/")}
          className="navbar_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="navbar_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
