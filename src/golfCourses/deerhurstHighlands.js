import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Deerhurst Highlands Golf Course';
const city = 'Huntsville, ON';
const designer = 'Bob Cupp & Thomas McBroom | 1990';
const website = 'https://deerhurstresort.com/golf/deerhurst-highlands/';
const coords = { lat: 45.342918, lng: -79.140315 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topFiftyNineCanada);
};

export default {
  init
};