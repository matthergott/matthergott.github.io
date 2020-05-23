import React from "react";

import '../style/HomePageBody.css';
import HomePageBodyCard from "./HomePageBodyCard";


import {faGolfBall} from "@fortawesome/free-solid-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const HomePageBody = (props) => {
  const careerCardAnchorTagProps = {
    'href': 'https://www.linkedin.com/in/matthew-hergott/'
  };

  const personalCardAnchorTagProps = {
    'onClick': props.navigateToGolfMapFunc
  };

  return (
    <section className="home-page-body">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <HomePageBodyCard
              title="My Career"
              text={
                "In 2020, I graduated from the University of Waterloo with a degree in Electrical Engineering. " +
                "Now I work as a software engineer for Wish. Want to learn more about my professional life? " +
                "Check out my LinkedIn!"
              }
              faIcon={faLinkedinIn}
              anchorTagProps={careerCardAnchorTagProps}
            />
          </div>
          <div className="column has-text-centered">
            <HomePageBodyCard
              title="My Free Time"
              text={
                "When I'm not working hard for Wish, I'm working hard on my golf game. I still have my very first " +
                "scorecard from when I was 3 years old! I am keeping track of all the golf courses I have played " +
                "in my life, click the link below to check out my Golf Map."
              }
              faIcon={faGolfBall}
              anchorTagProps={personalCardAnchorTagProps}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBody;