import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Banff Springs Golf Course';
const city = 'Banff, AB';
const designer = 'Stanley Thompson | 1928';
const website = 'https://www.fairmont.com/banff-springs/golf/the-fairmont-banff-springs-golf/';
const coords = { lat: 51.16411162321177, lng: -115.55896416683134 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredPublicNorthAmerica);
};

export default {
  init
};