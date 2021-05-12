import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Chardonnay Golf Club';
const city = 'American Canyon, CA';
const designer = 'Algie Pulley | 1991';
const website = 'http://www.chardonnaygolfclub.com/';
const coords = { lat: 38.215752201320214, lng: -122.23619505179332 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};