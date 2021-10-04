import React from "react";

import classes from "./Creations.module.css";
import PhotoGrid from "./PhotoGrid";

const Creations = (props) => {
  return (
    <React.Fragment>
      <div className={classes.CreationTab}>
        <h1>OUR CREATIONS</h1>
        <button className={classes.btn}>SEE ALL</button>
      </div>
      <div className={classes.photoGrid}>
        <PhotoGrid
          img={"image-deep-earth"}
          alt={"image of earth"}
          name={"DEEP"}
          name2={" EARTH"}
        />
        <PhotoGrid
          img={"image-night-arcade"}
          alt={"image of casino"}
          name={"NIGHT"}
          name2={"ARCADE"}
        />
        <PhotoGrid
          img={"image-soccer-team"}
          alt={"man playing soccer"}
          name={"SOCCER"}
          name2={"TEAM VR"}
        />
        <PhotoGrid
          img={"image-grid"}
          alt={"sideview of a car"}
          name={"THE"}
          name2={"GRID"}
        />
        <PhotoGrid
          img={"image-from-above"}
          alt={"zig-zag road"}
          name={" FROM UP"}
          name2={"ABOVE VR"}
        />
        <PhotoGrid
          img={"image-pocket-borealis"}
          alt={"colorfull sky"}
          name={"POCKET"}
          name2={"BOREALIS"}
        />
        <PhotoGrid
          img={"image-curiosity"}
          alt={"satellite"}
          name={"THE"}
          name2={"CURIOSITY"}
        />
        <PhotoGrid
          img={"image-fisheye"}
          alt={"fisheye view"}
          name={"MAKE IT"}
          name2={"FISHEYE"}
        />
      </div>
      <button className={classes.mobileButton}>SEE ALL</button>
    </React.Fragment>
  );
};

export default Creations;
