import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Granite Golf Club';
const city = 'Uxbridge, ON';
const designer = 'Thomas McBroom | 2000';
const website = 'https://granitegolfclub.ca/';
const coords = { lat: 44.00160737964134, lng: -79.22806158415757 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};