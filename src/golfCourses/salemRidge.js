import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Salem Ridge Golf & Academy';
const city = 'Ajax, ON';
const website = 'https://www.golfsalemridge.com/';
const coords = { lat: 43.901166, lng: -79.031143 };


const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, '', website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};