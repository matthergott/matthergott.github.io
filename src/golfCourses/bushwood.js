import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bushwood Golf Club';
const city = 'Markham, ON';
const designer = '';
const website = 'https://www.bushwoodgolf.com';
const coords = { lat: 43.943599, lng: -79.220250 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};