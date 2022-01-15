import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Silverado Resort - North Course';
const city = 'Napa, CA';
const designer = 'Robert Trent Jones Sr. | 1967 / Johnny Miller | R. 2011';
const website = 'https://www.silveradoresort.com/napa-valley-golf/courses';
const coords = { lat: 38.350028680961756, lng: -122.26508528551528 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};