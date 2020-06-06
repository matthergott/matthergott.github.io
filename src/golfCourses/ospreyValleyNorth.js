import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'TPC Toronto at Osprey Valley - North';
const city = 'Caledon, ON';
const designer = 'Doug Carrick | 2002';
const website = 'https://tpc.com/toronto/north/';
const coords = { lat: 43.850745, lng: -80.038489 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredCanada);
};

export default {
  init
};