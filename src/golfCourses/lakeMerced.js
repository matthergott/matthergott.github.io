import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Lake Merced Golf Club';
const city = 'Daly City, CA';
const designer = 'Willie Lock | 1923 / Alister MacKenzie | R. 1929 / Robert Muir Graves | R. 1965 / Rees Jones | R. 1996';
const website = 'https://www.lmgc.org/';
const coords = { lat: 37.696064, lng: -122.472276 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};