import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Whispering Ridge';
const city = 'Whitby, ON';
const designer = '';
const website = 'https://www.lakeridgelinks.com/the-courses/whispering-links/';
const coords = { lat: 43.975038, lng: -79.017269 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};