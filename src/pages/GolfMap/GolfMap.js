import React from "react";

import "./GolfMap.css";

import {GOOGLE_API_KEY} from "../../config";

import iconLinks from "../../helperFiles/iconLinks";

import bardmoor from "../../golfCourses/bardmoor";
import cherryDowns from "../../golfCourses/cherryDowns";
import copperCreek from "../../golfCourses/copperCreek";
import eaglesNest from "../../golfCourses/eaglesNest";
import eastBay from "../../golfCourses/eastBay";
import innisbrookCopperhead from "../../golfCourses/innisbrookCopperhead";
import kapaluaPlantation from "../../golfCourses/kapaluaPlantation";
import senecaHickoryStick from "../../golfCourses/senecaHickoryStick";
import wyndance from "../../golfCourses/wyndance";
import deerCreekNorth from "../../golfCourses/deerCreekNorth";
import deerCreekSouth from "../../golfCourses/deerCreekSouth";
import glenCedars from "../../golfCourses/glenCedars";
import salemRidge from "../../golfCourses/salemRidge";
import savannahGolfLinks from "../../golfCourses/savannahGolfLinks";
import halfMoon from "../../golfCourses/halfMoon";
import cinnamonHill from "../../golfCourses/cinnamonHill";
import hardRockCanaBay from "../../golfCourses/hardRockCanaBay";
import tarandowah from "../../golfCourses/tarandowah";
import otterCreek from "../../golfCourses/otterCreek";
import innerkip from "../../golfCourses/innerkip";
import woodstockMeadows from "../../golfCourses/woodstockMeadows";
import grandValleyGolf from "../../golfCourses/grandValleyGolf";
import rebelCreek from "../../golfCourses/rebelCreek";
import sallyCreek from "../../golfCourses/sallyCreek";
import creekside from "../../golfCourses/creekside";
import doonValley from "../../golfCourses/doonValley";
import monterra from "../../golfCourses/monterra";

const GolfMap = () => {
    window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('google-map'), {
            zoom: 7,
            center: {lat: 43.838, lng: -79.084} // open to Pickering
        });

        bardmoor.init(map);
        cherryDowns.init(map);
        cinnamonHill.init(map);
        creekside.init(map);
        copperCreek.init(map);
        deerCreekNorth.init(map);
        deerCreekSouth.init(map);
        doonValley.init(map);
        eaglesNest.init(map);
        eastBay.init(map);
        glenCedars.init(map);
        grandValleyGolf.init(map);
        halfMoon.init(map);
        hardRockCanaBay.init(map);
        innerkip.init(map);
        innisbrookCopperhead.init(map);
        kapaluaPlantation.init(map);
        monterra.init(map);
        otterCreek.init(map);
        rebelCreek.init(map);
        salemRidge.init(map);
        sallyCreek.init(map);
        savannahGolfLinks.init(map);
        senecaHickoryStick.init(map);
        tarandowah.init(map);
        woodstockMeadows.init(map);
        wyndance.init(map);

        initLegend(map);
    };

    const googleMapsScript = window.document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);

    const icons = {
        topPublicUs: {
            name: 'Top 100 Public Courses - US - GolfDigest 2019',
            icon: iconLinks.topPublicUs
        },
        topThirtyCanada: {
            name: 'Top 30 Courses - Canada - GolfDigest 2018',
            icon: iconLinks.topThirtyCanada
        },
        topHundredCanada: {
            name: 'Top 100 Courses - Canada - SCOREGolf 2018',
            icon: iconLinks.topHundredCanada
        },
        topFiftyNineCanada: {
            name: 'Top 59 Public Courses - Canada - SCOREGolf 2019',
            icon: iconLinks.topFiftyNineCanada
        }
    };

    const initLegend = (map) => {
        const legend = document.getElementById('legend');
        for (var key in icons) {
            var type = icons[key];
            var name = type.name;
            var icon = type.icon;
            var div = document.createElement('div');
            div.innerHTML = '<img src="' + icon + '"> ' + name;
            legend.appendChild(div);
        }
        map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
    };

    return (
        <>
            <div id="google-map" />
            <div id="legend"><h3>Legend</h3></div>
        </>
    );
};

export default GolfMap;