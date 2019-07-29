import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Woodstock Meadows Golf Centre';
const city = 'Blandford-Blenheim, ON';
const designer = 'Since 1996';
const website = 'https://woodstockmeadows.com/';
const coords = { lat: 43.169596, lng: -80.731054 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};