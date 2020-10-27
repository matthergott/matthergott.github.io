import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Angeles National Golf Club';
const city = 'Sunland, CA';
const designer = 'Nicklaus Design group | 2004';
const website = 'https://www.angelesnational.com/';
const coords = { lat: 34.267894, lng: -118.334630 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};