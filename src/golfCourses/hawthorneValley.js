import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Hawthorne Valley Golf Course';
const city = 'Pickering, ON';
const designer = '';
const website = 'http://www.hawthornevalleygolf.com/';
const coords = { lat: 43.923359, lng: -79.042292 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};