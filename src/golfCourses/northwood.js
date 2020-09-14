import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Northwood Golf Club';
const city = 'Monte Rio, CA';
const designer = 'Alister MacKenzie | 1928';
const website = 'http://www.northwoodgolf.com/';
const coords = { lat: 38.477830, lng: -122.997293 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};