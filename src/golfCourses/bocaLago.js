import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Boca Lago Golf & Country Club';
const city = 'Boca Raton, FL';
const designer = 'Bruce Devlin & Robert von Hagge | 1970 / Jan Bel Jan | R. 2018';
const website = 'https://www.bocalago.com/golf';
const coords = { lat: 26.355720283370665, lng: -80.18177024467116 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};