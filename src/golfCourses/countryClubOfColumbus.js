import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Country Club of Columbus';
const city = 'Columbus, GA';
const designer = 'Donald Ross | 1909';
const website = 'https://www.ccofcolumbus.com/';
const coords = { lat: 32.48914519917884, lng: -84.96202423781057 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};