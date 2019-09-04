import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Pinestone Resort, Conference Centre, Spa, and Golf Course';
const city = 'Haliburton, ON';
const designer = 'Jack Davidson | 1975';
const website = 'https://www.golfpinestone.com';
const coords = { lat: 45.018398, lng: -78.568516 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};