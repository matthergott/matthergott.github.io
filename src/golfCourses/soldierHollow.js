import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Soldier Hollow Golf Course - Gold Course';
const city = 'Midway, UT';
const designer = 'Gene Bates | 2004';
const website = 'http://www.soldierhollowgolf.com';
const coords = { lat: 40.482057, lng: -111.500862 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};