import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Wild Horse Golf Club';
const city = 'Gothenburg, NE';
const designer = 'Dan Proctor & Dave Axland | 1999';
const website = 'https://www.playwildhorse.com';
const coords = { lat: 40.954336, lng: -100.194534 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredPublicNorthAmerica);
};

export default {
  init
};