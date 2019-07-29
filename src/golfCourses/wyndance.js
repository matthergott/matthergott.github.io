import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Wyndance Golf Club';
const city = 'Uxbridge, ON';
const designer = 'Greg Norman | 2007';
const website = 'https://wyndance.clublink.ca/';
const coords = { lat: 44.049335, lng: -79.164852 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.topThirtyCanada);
};

export default {
    init
};