import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Royal Ashburn Golf Club';
const city = 'Whitby, ON';
const designer = 'Wilson Paterson and Bill Ogle | 1962';
const website = 'https://royalashburngolfclub.com';
const coords = { lat: 43.997876, lng: -79.009189 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};