import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Del Monte Golf Course';
const city = 'Monterey, CA';
const designer = 'Charles E. Maud | 1897 / Ernest Folger, J.A. Folger & T.P. Gower | R. 1903 / William Herbert Fowler | R. 1920 / Roger Larson | R. 1970';
const website = 'https://www.pebblebeach.com/golf/del-monte-golf-course/';
const coords = { lat: 36.59233352245448, lng: -121.87167717325198 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};