import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Kā’anapali Kai Golf Course';
const city = 'Kā’anapali, HI';
const designer = 'Arthur Jack Snyder | 1976 / R. Robin Nelson | 2005';
const website = 'https://www.kaanapaligolfcourses.com/';
const coords = { lat: 20.91608833551923, lng: -156.69066338390346 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};