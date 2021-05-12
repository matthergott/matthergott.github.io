import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Jasper Park Lodge Golf Course';
const city = 'Jasper, AB';
const designer = 'Stanley Thompson | 1925';
const website = 'https://www.fairmont.com/jasper/golf/the-fairmont-jasper-park-lodge-golf/';
const coords = { lat: 52.885466914677735, lng: -118.05368141635714 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredPublicNorthAmerica);
};

export default {
  init
};