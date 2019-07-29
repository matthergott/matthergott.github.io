import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Monterra Golf';
const city = 'The Blue Mountains, Ontario';
const designer = '';
const website = 'https://www.bluemountain.ca/things-to-do/activities/monterra-golf';
const coords = { lat: 44.504846, lng: -80.309233 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};