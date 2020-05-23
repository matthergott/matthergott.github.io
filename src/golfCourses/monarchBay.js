import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Monarch Bay Golf Club - Tony Lema';
const city = 'San Leandro, CA';
const designer = 'John Harbottle | 2001';
const website = 'https://www.monarchbaygc.com/';
const coords = { lat: 37.694613, lng: -122.185001 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};