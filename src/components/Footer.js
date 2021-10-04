import React from "react";

import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.leftContent}>
          <h1>loopstudios</h1>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>

        <div className={classes.rightContent}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </li>
          </ul>
          <p>
            <FontAwesomeIcon icon={faCopyright} />
            2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
