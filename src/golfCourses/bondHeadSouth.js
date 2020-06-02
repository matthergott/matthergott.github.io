import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Club at Bond Head - South Course';
const city = 'Bond Head, ON';
const designer = 'Jason Straka';
const website = 'https://bondhead.clublink.ca';
const coords = { lat: 44.081923, lng: -79.697037 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};