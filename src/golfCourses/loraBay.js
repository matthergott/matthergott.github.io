import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Golf Club at Lora Bay';
const city = 'Thornbury, ON';
const designer = 'Tom Lehman & Thomas McBroom | 2006';
const website = 'https://www.lorabaygolf.com/';
const coords = { lat: 44.580085, lng: -80.489971 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
  initCourse.init(map, title, coords, description, iconLinks.topFiftyNineCanada);
};

export default {
  init
};