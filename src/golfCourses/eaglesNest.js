import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Eagles Nest Golf Club';
const city = 'Maple, ON';
const designer = 'Doug Carrick';
const website = 'https://www.eaglesnestgolf.com/';
const coords = { lat: 43.865420, lng: -79.491245 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.topHundredCanada);
};

export default {
    init
};