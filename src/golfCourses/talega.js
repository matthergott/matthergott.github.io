import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Talega Golf Club';
const city = 'San Clemente, CA';
const designer = 'Fred Couples | 2001';
const website = 'https://www.talegagolfclub.com/';
const coords = { lat: 33.46304664955271, lng: -117.5960681843564 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};