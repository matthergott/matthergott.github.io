import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = "Old Greenwood Golf Course";
const city = 'Truckee, CA';
const designer = 'Jack Nicklaus | 2007';
const website = 'https://www.tahoemountainclub.com/golf/old-greenwood/course/';
const coords = { lat: 39.34416310077683, lng: -120.14462182255451 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};