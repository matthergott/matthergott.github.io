import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Cog Hill Golf & Country Club - Ravines Course';
const city = 'Lemont, IL';
const designer = 'David McIntosh & Bert Coghill | 1929';
const website = 'https://www.coghillgolf.com/golf/course-n-2';
const coords = { lat: 41.684716, lng: -87.946360 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};