import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Oak Quarry Golf Club';
const city = 'Riverside, CA';
const designer = 'Gil Morgan & Schmidt Curley Designs | 2000';
const website = 'http://oakquarry.com/';
const coords = { lat: 34.028511, lng: -117.431227 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};