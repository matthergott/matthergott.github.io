import ReactDOMServer from 'react-dom/server';

import initCourse from "../helperFiles/initCourse";
import iconLinks from "../helperFiles/iconLinks";

const title = 'The Hard Rock Golf Club at Cana Bay';
const city = 'Punta Cana, Dominican Republic';
const designer = 'Jack Nicklaus';
const website = 'https://www.hardrockhotelpuntacana.com/hard-rock-golf.htm';
const coords = { lat: 18.723997, lng: -68.479946 };

const description = ReactDOMServer.renderToStaticMarkup(initCourse.description(title, city, designer, website));

const init = (map) => {
    initCourse.init(map, title, coords, description, iconLinks.unlisted);
};

export default {
    init
};