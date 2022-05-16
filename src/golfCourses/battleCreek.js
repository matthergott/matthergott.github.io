import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Battle Creek Golf Club';
const city = 'Broken Arrow, OK';
const designer = 'Bland Pittman | 1997';
const website = 'https://www.battlecreekgolf.net/';
const coords = { lat: 36.08501631413393, lng: -95.80354526348889 }

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};