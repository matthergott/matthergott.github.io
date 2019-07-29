import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'Innisbrook Golf Resort - Copperhead Course';
const city = 'Palm Harbor, FL';
const designer = 'Edward Lawrence Packard | 1972 / Jerry Pate & Steve Wenzloff | R. 2015';
const website = 'https://www.innisbrookgolfresort.com/golf/copperhead-course';
const coords = { lat: 28.116095, lng: -82.750375 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.topPublicUs);
};

export default {
    init
};