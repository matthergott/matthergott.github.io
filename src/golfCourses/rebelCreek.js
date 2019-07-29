import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Rebel Creek Golf Club';
const city = 'Petersburg, ON';
const designer = '';
const website = 'https://www.golfnorth.ca/rebelcreek/';
const coords = { lat: 43.410587, lng: -80.610855 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};