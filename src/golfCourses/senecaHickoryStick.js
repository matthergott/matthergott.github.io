import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Seneca Hickory Stick Golf Course';
const city = 'Lewiston, NY';
const designer = 'Robert Trent Jones Jr. | 2010';
const website = 'http://www.senecahickorystick.com/';
const coords = { lat: 43.194235, lng: -79.022898 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};