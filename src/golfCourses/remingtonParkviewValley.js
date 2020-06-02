import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Remington Parkview G&CC - Valley Course';
const city = 'Markham, ON';
const designer = '';
const website = 'https://remingtonparkview.com/';
const coords = { lat: 43.841491, lng: -79.236134 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};