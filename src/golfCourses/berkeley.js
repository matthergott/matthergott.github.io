import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Berkeley Country Club';
const city = 'El Cerrito, CA';
const designer = 'Robert Hunter & Willie Watson | 1920 / Forrest Richardson & Associates | R. 2011';
const website = 'https://berkeleycountryclub.com/';
const coords = { lat: 37.934733, lng: -122.303165 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};