import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Foxbridge Golf Club';
const city = 'Uxbridge, ON';
const designer = '';
const website = 'https://www.golfnorth.ca/foxbridge/';
const coords = { lat: 44.103258, lng: -79.099974 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};