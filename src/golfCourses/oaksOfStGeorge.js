import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Oaks of St. George';
const city = 'Paris, ON';
const designer = 'Robert F. Moote & Associates | 1992';
const website = 'https://www.golfnorth.ca/theoaks/';
const coords = { lat: 43.227153, lng: -80.272304 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};