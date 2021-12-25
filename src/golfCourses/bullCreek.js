import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bull Creek Golf Course - East';
const city = 'Midland, GA';
const designer = 'Ward Northrup | 1972';
const website = 'https://www.bullcreekgc.com/';
const coords = { lat: 32.55009795035179, lng: -84.84204764823788 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};