import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Eagle Ranch Golf Course';
const city = 'Eagle, CO';
const designer = 'Arnold Palmer | 2001';
const website = 'https://www.eagleranchgolf.com';
const coords = { lat: 39.635233, lng: -106.822452 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};