import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Bardmoor Golf & Tennis Club';
const city = 'Seminole, FL';
const designer = 'William Diddle | 1971 / Gary Koch | R. 2001';
const website = 'https://www.bardmoorgolf.com/';
const coords = { lat: 27.867472, lng: -82.750219 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};