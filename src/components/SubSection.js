import React from "react";

import classes from "./SubSection.module.css";

const SubSection = () => {
  return (
    <div className={classes.section2}>
      <div className={classes.container}>
        <img
          className={classes.varMan}
          src={"./images/desktop/image-interactive.jpg"}
          alt="man wearing vr device"
        />
        <div className={classes.subSectionInfo}>
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SubSection;
