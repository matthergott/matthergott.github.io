import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Jacaranda Golf Club - East Course';
const city = 'Plantation, FL';
const designer = 'Mark Mahannah | 1970 / Bobby Weed | R. 2006';
const website = 'https://jacarandagolfclub.com/';
const coords = { lat: 26.110937947014015, lng: -80.27271547536925 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};