import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Wolf Run Golf Club';
const city = 'Janetville, ON';
const designer = 'Since 1991';
const website = 'https://www.wolfrungolfcourse.com';
const coords = { lat: 44.219861, lng: -78.761046 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};