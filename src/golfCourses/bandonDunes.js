import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bandon Dunes Golf Course';
const city = 'Bandon, OR';
const designer = 'David McLay Kidd | 1999';
const website = 'https://www.bandondunesgolf.com/golf/golf-courses/bandon-dunes';
const coords = { lat: 43.18788801441756, lng: -124.39051739828467 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredWorld);
};

export default {
  init
};