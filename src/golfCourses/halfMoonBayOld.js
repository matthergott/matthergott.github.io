import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Half Moon Bay Golf Links - The Old Course';
const city = 'Half Moon Bay, CA';
const designer = 'Arthur Hills | 1997';
const website = 'https://www.halfmoonbaygolf.com/the-old-course';
const coords = { lat: 37.435665, lng: -122.442683 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};