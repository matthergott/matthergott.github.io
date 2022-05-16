import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Lincoln Park Golf Course';
const city = 'San Francisco, CA';
const designer = '1902';
const website = 'http://www.lincolnparkgolfcourse.com/';
const coords = { lat: 37.782106892362116, lng: -122.49461746138584 }

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};