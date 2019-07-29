import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Deer Creek Golf Clubs - North Course';
const city = 'Ajax, ON';
const website = 'https://www.golfdeercreek.com/north-course';
const coords = { lat: 43.914927, lng: -79.025974 };


const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, '', website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};