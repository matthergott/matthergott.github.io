import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Black Diamond Golf Club';
const city = 'Pontypool, ON';
const designer = '';
const website = 'https://www.blackdiamondgolfclub.ca';
const coords = { lat: 44.125827, lng: -78.551158 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};