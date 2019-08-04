import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Carruther’s Creek Golf & Country Club';
const city = 'Ajax, ON';
const designer = 'Since 1999';
const website = 'https://www.carrutherscreekgolf.ca/';
const coords = { lat: 43.850365, lng: -78.980151 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};