import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Deerhurst Lakeside Golf Course';
const city = 'Huntsville, ON';
const designer = 'C.E. Robertson | 1966 / Thomas McBroom | R. 1988';
const website = 'https://deerhurstresort.com/golf/deerhurst-lakeside/';
const coords = { lat: 45.346905, lng: -79.132061 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};