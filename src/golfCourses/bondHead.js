import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Club at Bond Head';
const city = 'Bond Head, ON';
const designer = '';
const website = 'https://bondhead.clublink.ca';
const coords = { lat: 44.082135, lng: -79.699127 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};