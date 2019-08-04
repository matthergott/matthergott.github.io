import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Fox Run Golf Centre';
const city = 'Ajax, ON';
const designer = 'Since 1995';
const website = 'http://foxrungolfcentre.com/';
const coords = { lat: 43.889957, lng: -79.066852 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};