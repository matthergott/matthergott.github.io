import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bonaventure Golf Club';
const city = 'Weston, FL';
const designer = 'Joe Lee | 1970';
const website = 'http://www.golfbonaventure.com/';
const coords = { lat: 26.120008750915613, lng: -80.36988304281982 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};