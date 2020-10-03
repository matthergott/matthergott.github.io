import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Porter Valley Country Club';
const city = 'Northridge, CA';
const designer = 'Ted Robinson | 1968';
const website = 'https://www.clubcorp.com/Clubs/Porter-Valley-Country-Club/Amenities/Golf';
const coords = { lat: 34.275983, lng: -118.553703 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};