import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Kedron Dells Golf Club';
const city = 'Oshawa, ON';
const designer = '';
const website = 'https://www.kedrondells.com/';
const coords = { lat: 43.962310, lng: -78.882204 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};