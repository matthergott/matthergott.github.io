import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Hiddenbrooke Golf Club';
const city = 'Vallejo, CA';
const designer = 'Arnold Palmer | 1995';
const website = 'https://www.hiddenbrookegolf.com/course/';
const coords = { lat: 38.155671, lng: -122.178700 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};