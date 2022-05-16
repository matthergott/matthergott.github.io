import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Club at Forest Ridge';
const city = 'Broken Arrow, OK';
const designer = 'Randy Heckenkemper | 1989';
const website = 'https://www.forestridge.com/';
const coords = { lat: 36.05973308174571, lng: -95.69736463279666 }

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};