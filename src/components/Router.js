import React, { useState } from 'react';

import Home from "../pages/Home/Home";
import GolfMap from "../pages/GolfMap/GolfMap";


const Router = () => {
  const [pageName, setPageName] = useState("");

  const home = (
    <Home setPageName={setPageName}/>
  );
  const golfMap = (
    <GolfMap setPageName={setPageName}/>
  );

  const pagesDict = {
    "": home,
    "home": home,
    "golfMap": golfMap,
  };

  return pagesDict[pageName];
};

export default Router;