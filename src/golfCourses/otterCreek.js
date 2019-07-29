import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Otter Creek Golf Club';
const city = 'Otterville, ON';
const designer = 'Dick Kirkpatrick | 2008';
const website = 'https://www.ottercreekgolfclub.com/';
const coords = { lat: 42.916750, lng: -80.609265 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};