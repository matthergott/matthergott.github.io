import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'River Strand Golf & Country Club';
const city = 'Bradenton, FL';
const designer = 'Arthur Hills';
const website = 'https://riverstrandgolf.com';
const coords = { lat: 27.508699, lng: -82.468278 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};