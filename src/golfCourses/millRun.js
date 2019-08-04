import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Mill Run Golf Club';
const city = 'Uxbridge, ON';
const designer = '';
const website = 'https://www.golfmillrun.com';
const coords = { lat: 44.079569, lng: -79.223597 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};