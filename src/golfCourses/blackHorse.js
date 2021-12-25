import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bayonet / Black Horse Golf Club - Black Horse';
const city = 'Seaside, CA';
const designer = 'Bob McClure | 1964 / Gene Bates | R. 2008';
const website = 'https://www.bayonetblackhorse.com/club/scripts/section/section.asp?NS=BH';
const coords = { lat: 36.63029259494847, lng: -121.82086259127385 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};