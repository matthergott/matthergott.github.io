import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bunker Hill Golf Club';
const city = 'Pickering, ON';
const designer = 'Jason Miller | 2016';
const website = 'http://www.bunkerhillgolfclub.com/';
const coords = { lat: 43.939945, lng: -79.037318 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};