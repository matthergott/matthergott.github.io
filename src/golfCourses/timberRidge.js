import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Timber Ridge Golf Course';
const city = 'Brighton, ON';
const designer = 'Steven L. Ward';
const website = 'http://www.timberridgegolf.net';
const coords = { lat: 44.075330, lng: -77.700660 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};