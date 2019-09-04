import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Yocha Dehe Golf Club';
const city = 'Brooks, CA';
const designer = 'Brad Bell | 2009';
const website = 'https://yochadehegolfclub.com';
const coords = { lat: 38.734467, lng: -122.128464 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};