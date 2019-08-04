import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'TPC Toronto at Osprey Valley - Heathlands';
const city = 'Caledon, ON';
const designer = 'Doug Carrick | 1990';
const website = 'https://tpc.com/toronto/';
const coords = { lat: 43.849721, lng: -80.043073 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredCanada);
};

export default {
  init
};