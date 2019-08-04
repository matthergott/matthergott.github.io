import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Grey Silo Golf Club';
const city = 'Waterloo, ON';
const designer = '';
const website = 'http://www.golfnorth.ca/greysilo/';
const coords = { lat: 43.517051, lng: -80.492193 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};