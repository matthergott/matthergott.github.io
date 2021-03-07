import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Santa Rosa Golf & Country Club';
const city = 'Santa Rosa, CA';
const designer = 'Jack Fleming | 1959';
const website = 'https://www.clubcorp.com/Clubs/Santa-Rosa-Golf-Country-Club';
const coords = { lat: 38.43469207148302, lng: -122.80159794436155 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};