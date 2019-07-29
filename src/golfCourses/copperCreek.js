import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Copper Creek Golf Club';
const city = 'Kleinburg, ON';
const designer = 'Doug Carrick | 2002';
const website = 'https://www.coppercreek.ca/';
const coords = { lat: 43.857464, lng: -79.641953 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.topHundredCanada);
};

export default {
    init
};