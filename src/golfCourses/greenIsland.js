import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Green Island Country Club';
const city = 'Columbus, GA';
const designer = 'George Cobb & Joe Lee | 1961';
const website = 'https://www.greenislandcc.org/';
const coords = { lat: 32.53825278104476, lng: -85.0058417021988 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};