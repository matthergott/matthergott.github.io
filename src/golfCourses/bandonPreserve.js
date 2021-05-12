import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bandon Preserve Golf Course';
const city = 'Bandon, OR';
const designer = 'Ben Crenshaw & Bill Coore | 2012';
const website = 'https://www.bandondunesgolf.com/golf/golf-courses/preserve';
const coords = { lat: 43.18579296617889, lng: -124.3908718890509 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};