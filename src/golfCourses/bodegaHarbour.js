import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Links at Bodega Harbour';
const city = 'Bodega Bay, CA';
const designer = 'Robert Trent Jones Jr. | 1978';
const website = 'https://www.bodegaharbourgolf.com/';
const coords = { lat: 38.313103, lng: -123.027260 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};