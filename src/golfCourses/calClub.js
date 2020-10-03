import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'California Golf Club of San Francisco';
const city = 'South San Francisco, CA';
const designer = 'Willie Locke & A. Vernon Macan | 1926 / Alister MacKenzie | R. 1928 / Kyle Phillips | R. 2007';
const website = 'https://www.calclub.org/';
const coords = { lat: 37.649594, lng: -122.438628 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};