import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Pasatiempo Golf Club';
const city = 'Santa Cruz, CA';
const designer = 'Alister MacKenzie | 1929 / Tom Doak | R. 1998-2006';
const website = 'https://www.pasatiempo.com/';
const coords = { lat: 37.00443723389102, lng: -122.0260414476742 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredUs);
};

export default {
  init
};