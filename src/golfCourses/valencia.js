import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Valencia Country Club';
const city = 'Valencia, CA';
const designer = 'Robert Trent Jones Sr. | 1965';
const website = 'https://www.valenciagolfclub.com/';
const coords = { lat: 34.419315835660775, lng: -118.57802000214907 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};  