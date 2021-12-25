import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Diablo Country Club';
const city = 'Diablo, CA';
const designer = 'Jack Neville & William Watson | 1914 / Todd Eckenrode | R. 2017';
const website = 'https://www.diablocc.org/';
const coords = { lat: 37.83581620007463, lng: -121.95842246350848 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};