import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Whitevale Golf Club';
const city = 'Whitevale, ON';
const designer = 'Jack Boyes & Bill Diddel | 1958 / Thomas McBroom | R. 2006';
const website = 'https://whitevalegolfclub.com';
const coords = { lat: 43.878150, lng: -79.146397 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};