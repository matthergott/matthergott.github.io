import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'TPC Harding Park';
const city = 'Daly City, CA';
const designer = 'Willie Watson & Sam Whiting | 1925';
const website = 'https://tpc.com/hardingpark/';
const coords = { lat: 37.724364, lng: -122.493648 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};