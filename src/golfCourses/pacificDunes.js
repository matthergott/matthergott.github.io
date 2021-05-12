import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Pacific Dunes Golf Course';
const city = 'Bandon, OR';
const designer = 'Tom Doak | 2001';
const website = 'https://www.bandondunesgolf.com/golf/golf-courses/pacific-dunes';
const coords = { lat: 43.193443248167746, lng: -124.38991284071679 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredWorld);
};

export default {
  init
};