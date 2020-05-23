import React from "react";

import '../style/HomePageHeader.css';

const HomePageHeader = () => {
  return (
    <section className="hero is-fullheight is-dark">
      <div className="container">
        <nav className="level">
          <div className="level-item has-text-centered">
            <figure className="image is-256x256">
              <img className="is-rounded" src={require('../img/headshot.jpg')} alt=""/>
            </figure>
          </div>
        </nav>
        <nav className="level">
          <div className="level-item has-text-centered">
            <h2 className="title is-2">Hi, I'm Matt</h2>
          </div>
        </nav>
        <nav className="level">
          <div className="level-item has-text-centered">
            <p className="is-large">I'm an experienced software engineer with a passion for building scalable, maintainable applications</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HomePageHeader;