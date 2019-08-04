import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Oakridge Golf Club';
const city = 'Port Perry, ON';
const designer = '';
const website = 'https://golfoakridge.com/';
const coords = { lat: 44.036532, lng: -79.032191 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};