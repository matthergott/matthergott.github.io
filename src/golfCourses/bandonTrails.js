import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bandon Trails Golf Course';
const city = 'Bandon, OR';
const designer = 'Ben Crenshaw & Bill Coore | 2005';
const website = 'https://www.bandondunesgolf.com/golf/golf-courses/bandon-trails';
const coords = { lat: 43.184802399358276, lng: -124.39167439632327 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredWorld);
};

export default {
  init
};