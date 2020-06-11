import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Cobble Beach Golf Links';
const city = 'Kemble, ON';
const designer = 'Doug Carrick | 2007';
const website = 'https://www.cobblebeach.com/Golf/';
const coords = { lat: 44.673305, lng: -80.926983 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredCanada);
};

export default {
  init
};
