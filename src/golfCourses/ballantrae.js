import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Ballantrae Golf and Country Club';
const city = 'Stouffville, ON';
const designer = '';
const website = 'https://ballantraegolfclub.com';
const coords = { lat: 44.047564, lng: -79.289148 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};