import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Sharp Park Golf Course';
const city = 'Pacifica, CA';
const designer = 'Alister MacKenzie | 1932';
const website = 'http://sfrecpark.org/Facilities/Facility/Details/Sharp-Park-Golf-Course-42';
const coords = { lat: 37.624870, lng: -122.488733 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};