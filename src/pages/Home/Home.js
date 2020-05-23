import React from "react";

import 'bulma/css/bulma.min.css'

import HomePageHeader from "../../components/HomePageHeader";
import HomePageBody from "../../components/HomePageBody";
import HomePageFooter from "../../components/HomePageFooter";
import HomePageAlerts from "../../components/HomePageAlerts";

const Home = (props) => {
  const navigateToGolfMap = () => {
    props.setPageName('golfMap');
  };

  return (
    <>
      <HomePageAlerts/>
      <HomePageHeader/>
      <HomePageBody navigateToGolfMapFunc={navigateToGolfMap}/>
      <HomePageFooter/>
    </>
  );
};

export default Home;