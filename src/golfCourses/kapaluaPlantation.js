import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Kapalua Golf - The Plantation Course';
const city = 'Lahaina, HI';
const designer = 'Ben Crenshaw & Bill Coore | 1991';
const website = 'https://golfatkapalua.com/plantation_course/';
const coords = { lat: 21.007102, lng: -156.639907 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.topHundredPublicUs);
};

export default {
    init
};