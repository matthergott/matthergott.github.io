import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Innerkip Highlands Golf Club';
const city = 'Innerkip, ON';
const designer = '1993';
const website = 'http://www.innerkiphighlands.com/';
const coords = { lat: 43.215444, lng: -80.687493 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};