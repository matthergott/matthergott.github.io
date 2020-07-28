import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Presidio Golf Course';
const city = 'San Francisco, CA';
const designer = 'Robert Wood Johnstone | 1895 / Robert Wood Johnstone & William McEwan | R. 1910 / Fowler & Simpson | R. 1921';
const website = 'https://www.presidiogolf.com/';
const coords = { lat: 37.790508, lng: -122.459999 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};