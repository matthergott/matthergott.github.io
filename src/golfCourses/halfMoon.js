import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Half Moon Golf Course';
const city = 'St. Bran\'s Burg, Jamaica';
const designer = 'Robert Trent Jones Sr. | 1962';
const website = 'https://www.halfmoon.com/golf/';
const coords = { lat: 18.521759, lng: -77.839474 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};