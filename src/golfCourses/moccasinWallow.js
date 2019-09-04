import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Moccasin Wallow Golf Club';
const city = 'Palmetto, FL';
const designer = '';
const website = 'https://www.golfthemoc.com/';
const coords = { lat: 27.598913, lng: -82.497129 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};