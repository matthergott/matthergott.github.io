import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Grand Valley Golf & Country Club';
const city = 'Cambridge, ON';
const designer = '1982';
const website = 'http://www.grandvalleygolf.com';
const coords = { lat: 43.357460, lng: -80.402393 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};