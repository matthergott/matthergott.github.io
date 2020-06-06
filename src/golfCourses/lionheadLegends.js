import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Lionhead Golf Club - Legends';
const city = 'Brampton, ON';
const designer = 'Ted Baker | 1990';
const website = 'https://kaneffgolf.com/courses/lionheadgolfconferencecentre/';
const coords = { lat: 43.641564, lng: -79.787853 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};