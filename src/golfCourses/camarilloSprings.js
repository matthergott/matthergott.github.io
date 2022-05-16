import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Camarillo Springs Golf Course';
const city = 'Camarillo, CA';
const designer = 'Ted Robinson Sr. | 1970';
const website = 'https://camarillospringsgolf.com/';
const coords = { lat: 34.20201090076982, lng: -118.9892023751747 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};