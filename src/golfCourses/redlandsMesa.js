import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Golf Club at Redlands Mesa';
const city = 'Grand Junction, CO';
const designer = 'Jim Engh | 2001';
const website = 'https://redlandsmesa.com/';
const coords = { lat: 39.055819, lng: -108.621992 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};