import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Page Belcher Golf Course - Olde Page';
const city = 'Tulsa, OK';
const designer = 'Leon Howard | 1977';
const website = 'https://www.tulsagolf.org/the-courses';
const coords = { lat: 36.06627127015638, lng: -96.0154410904697 }

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};