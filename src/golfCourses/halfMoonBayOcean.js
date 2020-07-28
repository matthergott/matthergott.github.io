import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Half Moon Bay Golf Links - The Ocean Course';
const city = 'Half Moon Bay, CA';
const designer = 'Donald Ross | 1922 / Ron Forse | R. 2003';
const website = 'https://www.halfmoonbaygolf.com/the-ocean-course';
const coords = { lat: 37.427145, lng: -122.434915 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};