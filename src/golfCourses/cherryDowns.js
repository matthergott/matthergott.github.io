import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Cherry Downs Golf Club';
const city = 'Pickering, ON';
const designer = 'Howard Watson | 1962';
const website = 'https://cherrydowns.clublink.ca/';
const coords = { lat: 43.944464, lng: -79.092084 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};