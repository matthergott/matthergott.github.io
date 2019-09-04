import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Meadowbrook Golf Club';
const city = 'Gormley, ON';
const designer = '1960 / Graham Cook | R. 2003';
const website = 'https://meadowbrookgolf.net';
const coords = { lat: 43.940102, lng: -79.349974 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};