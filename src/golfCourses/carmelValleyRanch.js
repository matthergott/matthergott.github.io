import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Carmel Valley Ranch Golf Course';
const city = 'Carmel, CA';
const designer = 'Pete Dye | 1981';
const website = 'https://www.carmelvalleyranch.com/golf';
const coords = { lat: 36.517334536059224, lng: -121.79931795513981 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};