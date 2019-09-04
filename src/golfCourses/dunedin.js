import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Dunedin Golf Club';
const city = 'Dunedin, FL';
const designer = 'Donald Ross | 1927';
const website = 'http://www.dunedingolfclub.com/';
const coords = { lat: 28.042431, lng: -82.777206 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};