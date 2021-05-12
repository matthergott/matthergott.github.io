import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Cog Hill Golf & Country Club - Dubsdread Course';
const city = 'Lemont, IL';
const designer = 'Dick Wilson & Joe Lee | 1964 / Rees Jones | R. 2008';
const website = 'https://www.coghillgolf.com/golf/course-n-4';
const coords = { lat: 41.675622, lng: -87.950463 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topHundredPublicNorthAmerica);
};

export default {
  init
};