import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Eagle Vines Golf Club';
const city = 'American Canyon, CA';
const designer = 'Johnny Miller | 2004';
const website = 'http://www.eaglevinesgolfclub.com/';
const coords = { lat: 38.218214, lng: -122.251033 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};