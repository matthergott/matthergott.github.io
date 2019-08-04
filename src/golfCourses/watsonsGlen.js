import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Watson\'s Glen Golf Club';
const city = 'Pickering, ON';
const designer = 'Kevin Holmes';
const website = 'https://watsonsglen.com/';
const coords = { lat: 43.960527, lng: -79.031991 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};