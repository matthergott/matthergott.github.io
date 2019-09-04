import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Angus Glen Golf Club - South Course';
const city = 'Markham, ON';
const designer = 'MacKenzie & Ebert | R. 2015';
const website = 'http://www.angusglen.com/';
const coords = { lat: 43.902090, lng: -79.324847 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};