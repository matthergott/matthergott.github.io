import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Sally Creek Golf Club';
const city = 'Woodstock, ON';
const designer = 'John F Robinson';
const website = 'https://sallycreekgolf.com/';
const coords = { lat: 43.147070, lng: -80.769790 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};