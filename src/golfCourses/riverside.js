import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Riverside Golf Course';
const city = 'Ajax, ON';
const designer = '';
const website = 'https://www.brucesgolfrewards.com/listings/riverside-g-c/';
const coords = { lat: 43.866545, lng: -79.071326 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};