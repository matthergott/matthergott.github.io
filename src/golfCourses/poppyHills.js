import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Poppy Hills Golf Course';
const city = 'Pebble Beach, CA';
const designer = 'Robert Trent Jones Jr. | 1986 / Robert Trent Jones Jr. & Bruce Charlton | R. 2013';
const website = 'https://poppyhillsgolf.com/';
const coords = { lat: 36.58230898550284, lng: -121.93842531045631 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};