import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Main.module.css";

const Main = () => {
  const [Hambuger, setHamburger] = useState(false);
  const [navIcon, setnavIcon] = useState(!false);
  return (
    <div className={classes.overlay}>
      <div className={classes.navbar}>
        <h1 className={classes.logo}>loopstudios</h1>
        <ul className={Hambuger ? classes.mobileNavlist : classes.navlist}>
          <li className={classes.underline}>About</li>
          <li className={classes.underline}>Careers</li>
          <li className={classes.underline}>Events</li>
          <li className={classes.underline}>Products</li>
          <li className={classes.underline}>Support</li>
        </ul>
        <a
          className={classes.menu}
          href="#"
          onClick={() => {
            setHamburger(!Hambuger);
            setnavIcon(!navIcon);
          }}
        >
          <FontAwesomeIcon icon={navIcon ? faBars : faTimes} size="2x" />
        </a>
      </div>
      <h1 className={classes.column}>
        <span>IMMERSIVE EXPERIENCES THAT DELIVER</span>
      </h1>
    </div>
  );
};
export default Main;
