import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Glen Cedars Golf Club';
const city = 'Claremont, ON';
const website = 'https://www.golfglencedars.com/';
const coords = { lat: 43.922675, lng: -79.187165 };


const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, '', website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};