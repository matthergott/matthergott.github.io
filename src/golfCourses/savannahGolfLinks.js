import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Savannah Golf Links';
const city = 'Cambridge, ON';
const designer = 'Since 1998';
const website = 'http://www.savannahgolflinks.ca';
const coords = { lat: 43.329400, lng: -80.285886 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};