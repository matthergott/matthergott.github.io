import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Baylands Golf Links';
const city = 'Palo Alto, CA';
const designer = 'William F. Bell | 1956 / Forrest Richardson | R. 2018';
const website = 'https://baylandsgolflinks.com/';
const coords = { lat: 37.45372117693715, lng: -122.11594397562085 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};