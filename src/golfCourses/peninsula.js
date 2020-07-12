import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Peninsula Golf and Country Club';
const city = 'San Mateo, CA';
const designer = 'Donald Ross | 1922 / Ron Forse | R. 2003';
const website = 'https://www.thepgcc.org/golf';
const coords = { lat: 37.541420, lng: -122.321275 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};