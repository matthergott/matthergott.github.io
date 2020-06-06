import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Tarandowah Golfers Club';
const city = 'Springfield, ON';
const designer = 'Martin Hawtree | 2007';
const website = 'https://tarandowah.ca/';
const coords = { lat: 42.897755, lng: -80.931557 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.topFiftyNineCanada);
};

export default {
    init
};