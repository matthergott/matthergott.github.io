import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Sand Canyon Country Club';
const city = 'Santa Clarita, CA';
const designer = 'Ted Robinson Sr. & Ted Robinson Jr. | 1999';
const website = 'https://www.sandcanyoncc.com/';
const coords = { lat: 34.411266, lng: -118.415469 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};