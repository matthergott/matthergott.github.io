import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Doon Valley Golf Course';
const city = 'Kitchener, ON';
const designer = '';
const website = 'https://www.kitchenergolf.ca/en/ourcourses/DoonValley.asp';
const coords = { lat: 43.394427, lng: -80.396152 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};