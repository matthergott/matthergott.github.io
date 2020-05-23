import React from "react";

import '../style/HomePageBodyCard.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HomePageBodyCard = (props) => {
  return (
    <div className="home-page-body-card">
      <nav className="level">
        <div className="level-item has-text-centered">
          <h3 className="title is-3">{props.title}</h3>
        </div>
      </nav>
      <nav className="level">
        <div className="level-item has-text-centered">
          <p className="is-large">{props.text}</p>
        </div>
      </nav>
      <nav className="level">
        <div className="level-item has-text-centered">
          <a className="icon" {...props.anchorTagProps}>
            <FontAwesomeIcon icon={props.faIcon}/>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HomePageBodyCard;