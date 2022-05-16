import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Creekside Golf Course';
const city = 'Modesto, CA';
const designer = 'Jack Daray Jr. & Stephen Halsey | 1991';
const website = 'https://modestogolfcourses.com/';
const coords = { lat: 37.652242400525175, lng: -120.93991769599548 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};