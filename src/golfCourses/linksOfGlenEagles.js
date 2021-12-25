import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Links of GlenEagles';
const city = 'Cochrane, AB';
const designer = 'Les Furber | 1980';
const website = 'https://www.gleneaglesgolf.com/';
const coords = { lat: 51.19054606983673, lng: -114.43337852648322 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};