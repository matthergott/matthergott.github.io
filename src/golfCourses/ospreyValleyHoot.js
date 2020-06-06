import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'TPC Toronto at Osprey Valley - Hoot';
const city = 'Caledon, ON';
const designer = 'Doug Carrick | 2001';
const website = 'https://tpc.com/toronto/hoot/';
const coords = { lat: 43.843039, lng: -80.030335 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredCanada);
};

export default {
  init
};