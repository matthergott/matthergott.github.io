import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Shoreline Golf Links';
const city = 'Mountain View, CA';
const designer = 'Robert Trent Jones Jr. | 1983';
const website = 'https://www.shorelinelinks.com/';
const coords = { lat: 37.43045737532875, lng: -122.08535274468692 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};