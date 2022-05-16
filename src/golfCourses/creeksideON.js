import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Creekside Golf Course';
const city = 'Woodstock, ON';
const designer = '';
const website = 'http://www.creeksidegolf.ca/';
const coords = { lat: 43.120829, lng: -80.728713 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};