import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Old Macdonald Golf Course';
const city = 'Bandon, OR';
const designer = 'Tom Doak & Jim Urbina | 2010';
const website = 'https://www.bandondunesgolf.com/golf/golf-courses/old-macdonald';
const coords = { lat: 43.20224412747824, lng: -124.38362407898623 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredPublicNorthAmerica);
};

export default {
  init
};