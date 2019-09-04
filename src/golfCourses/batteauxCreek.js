import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Batteaux Creek Golf Club';
const city = 'Nottawa, ON';
const designer = 'Stephen Young | 2002';
const website = 'https://www.golfnorth.ca/batteaux/';
const coords = { lat: 44.433089, lng: -80.200323 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};