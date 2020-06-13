import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Hockley Valley Resort';
const city = 'Mono, ON';
const designer = 'Thomas McBroom | 1990';
const website = 'https://hockley.com/golf/';
const coords = { lat: 43.977562, lng: -80.047519 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};