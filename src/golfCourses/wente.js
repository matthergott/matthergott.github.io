import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Course at Wente Vineyards';
const city = 'Livermore, CA';
const designer = 'Greg Norman & Tad Burnett | 1998';
const website = 'https://wentevineyards.com/golf';
const coords = { lat: 37.624724039300084, lng: -121.75438951047596 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};