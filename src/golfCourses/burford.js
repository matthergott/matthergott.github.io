import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Burford Golf Links';
const city = 'Burford, ON';
const designer = '';
const website = 'https://www.golfnorth.ca/burford/';
const coords = { lat: 43.137396, lng: -80.463666 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};