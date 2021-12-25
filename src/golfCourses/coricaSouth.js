import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Corica Park - South Course';
const city = 'Alameda, CA';
const designer = 'Rees Jones | 2018';
const website = 'https://www.coricapark.com/golf/';
const coords = { lat: 37.73895676222984, lng: -122.23337936138584 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
  init
};