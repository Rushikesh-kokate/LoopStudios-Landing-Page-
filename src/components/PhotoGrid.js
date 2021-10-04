import React from "react";

import classes from "./PhotoGrid.module.css";

const PhotoGrid = (props) => {
  return (
    <div className={classes.overlay}>
      <img
        className={classes.creationImg}
        src={`./images/desktop/${props.img}.jpg`}
        alt={props.alt}
      />
      <img
        className={classes.mobileImg}
        src={`./images/mobile/${props.img}.jpg`}
        alt={props.alt}
      />
      <div className={classes.name}>
        <h1 className={classes.text}>{props.name}</h1>
        <h1 className={classes.text2}>{props.name2}</h1>
      </div>
    </div>
  );
};

export default PhotoGrid;
