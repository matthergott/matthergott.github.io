import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Metropolitan Golf Links';
const city = 'Oakland, CA';
const designer = 'Johnny Miller | 2003';
const website = 'https://www.playmetro.com/';
const coords = { lat: 37.71975666641455, lng: -122.1931034308925 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};