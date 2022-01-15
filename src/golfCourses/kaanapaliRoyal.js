import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Royal Kā’anapali Golf Course';
const city = 'Kā’anapali, HI';
const designer = 'Robert Trent Jones Sr. | 1962';
const website = 'https://www.kaanapaligolfcourses.com/';
const coords = { lat: 20.917789560076184, lng: -156.6916321383648 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};