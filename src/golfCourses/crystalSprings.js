import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Crystal Springs Golf Course';
const city = 'Burlingame, CA';
const designer = 'William Herbert Fowler | 19243';
const website = 'https://www.playcrystalsprings.com/';
const coords = { lat: 37.557761, lng: -122.381992 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};