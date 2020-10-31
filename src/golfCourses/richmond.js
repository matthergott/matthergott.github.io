import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Richmond Country Club';
const city = 'Richmond, CA';
const designer = 'Bill Sawyer | 1924';
const website = 'https://www.myrichmondcc.org/';
const coords = { lat: 37.985662, lng: -122.349913 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};