import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'PGA National - The Palmer';
const city = 'Palm Beach Gardens, FL';
const designer = 'Arnold Palmer | 1984';
const website = 'https://www.pgaresort.com/golf/courses/palmer/';
const coords = { lat: 26.828587491222414, lng: -80.14088476027898 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};