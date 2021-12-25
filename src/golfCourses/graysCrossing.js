import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = "The Golf Club at Gray's Crossing";
const city = 'Truckee, CA';
const designer = 'Peter Jacobsen | 2007';
const website = 'https://www.tahoemountainclub.com/golf/grays-crossing/course/';
const coords = { lat: 39.349294807094914, lng: -120.16604717131439 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};