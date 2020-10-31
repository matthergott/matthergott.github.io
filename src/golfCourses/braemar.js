import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Braemar Country Club';
const city = 'Tarzana, CA';
const designer = 'Ted Robinson Sr. | 1963';
const website = 'https://www.clubcorp.com/Clubs/Braemar-Country-Club/';
const coords = { lat: 34.143268, lng: -118.541803 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};