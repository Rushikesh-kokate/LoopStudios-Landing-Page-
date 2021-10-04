import React, { Fragment } from "react";

import Main from "./components/Main";
import SubSection from "./components/SubSection";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Main />
      <SubSection />
      <Creations />
      <Footer />
    </Fragment>
  );
};

export default App;
