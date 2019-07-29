import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'East Bay Golf Club';
const city = 'Largo, FL';
const website = 'http://www.eastbaygolfclub.com/';
const coords = { lat: 27.909641, lng: -82.767413 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, '', website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};