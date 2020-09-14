import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Rustic Canyon Golf Course';
const city = 'Moorpark, CA';
const designer = 'Hanse Golf Design | 2001';
const website = 'https://www.rusticcanyongolfcourse.com/';
const coords = { lat: 34.311836, lng: -118.867338 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};