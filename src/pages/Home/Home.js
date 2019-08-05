import React from "react";

const Home = () => {
  const name = 'Matt';
  const element = <h1>Salut, je m'appelle {name}</h1>;

  return (
    <div>
      {element}
    </div>
  );
};

export default Home;