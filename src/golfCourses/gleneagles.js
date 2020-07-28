import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Gleneagles Golf Club at McLaren Park';
const city = 'San Francisco, CA';
const designer = 'Jack Fleming | 1962';
const website = 'http://www.gleneaglesgolfsf.com/';
const coords = { lat: 37.716029, lng: -122.424256 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};