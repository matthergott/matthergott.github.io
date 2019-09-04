import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Ingersoll Golf Club';
const city = 'Ingersoll, ON';
const designer = '1952';
const website = 'https://ingersollgolf.com/';
const coords = { lat: 43.027051, lng: -80.876339 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};