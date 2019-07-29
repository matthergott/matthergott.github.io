import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Cinnamon Hill Golf Course';
const city = 'Rose Hall, Jamaica';
const designer = 'von Hagge & Rick Baril';
const website = 'https://rosehall.com/cinnamon-hill';
const coords = { lat: 18.518417, lng: -77.813141 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};