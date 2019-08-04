import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Lakeridge Links';
const city = 'Whitby, ON';
const designer = '';
const website = 'https://www.lakeridgelinks.com/the-courses/lakeridge-links/';
const coords = { lat: 43.974648, lng: -79.018496 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};