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
import ospreyValleyHeathlands from "../../golfCourses/ospreyValleyHeathlands";
import otterCreek from "../../golfCourses/otterCreek";
import innerkip from "../../golfCourses/innerkip";
import woodstockMeadows from "../../golfCourses/woodstockMeadows";
import grandValleyGolf from "../../golfCourses/grandValleyGolf";
import rebelCreek from "../../golfCourses/rebelCreek";
import sallyCreek from "../../golfCourses/sallyCreek";
import creekside from "../../golfCourses/creekside";
import doonValley from "../../golfCourses/doonValley";
import monterra from "../../golfCourses/monterra";
import blackDiamond from "../../golfCourses/blackDiamond";
import bondHead from "../../golfCourses/bondHead";
import whitevale from "../../golfCourses/whitevale";
import royalAshburn from "../../golfCourses/royalAshburn";
import ballantrae from "../../golfCourses/ballantrae";
import angusGlen from "../../golfCourses/angusGlen";
import millRun from "../../golfCourses/millRun";
import wolfRun from "../../golfCourses/wolfRun";
import greySilo from "../../golfCourses/greySilo";
import deerhurstHighlands from "../../golfCourses/deerhurstHighlands";
import deerhurstLakeside from "../../golfCourses/deerhurstLakeside";
import bunkerHill from "../../golfCourses/bunkerHill";
import carruthersCreek from "../../golfCourses/carruthersCreek";
import lakeridgeLinks from "../../golfCourses/lakeridgeLinks";
import whisperingRidge from "../../golfCourses/whisperingRidge";
import watsonsGlen from "../../golfCourses/watsonsGlen";
import riverside from "../../golfCourses/riverside";
import oakridge from "../../golfCourses/oakridge";
import foxbridge from "../../golfCourses/foxbridge";
import bushwood from "../../golfCourses/bushwood";
import hawthorneValley from "../../golfCourses/hawthorneValley";
import foxRun from "../../golfCourses/foxRun";
import timberRidge from "../../golfCourses/timberRidge";
import meadowbrook from "../../golfCourses/meadowbrook";
import moccasinWallow from "../../golfCourses/moccasinWallow";
import burford from "../../golfCourses/burford";
import batteauxCreek from "../../golfCourses/batteauxCreek";
import riverStrand from "../../golfCourses/riverStrand";
import dunedin from "../../golfCourses/dunedin";
import pinestone from "../../golfCourses/pinestone";
import ingersoll from "../../golfCourses/ingersoll";
import cogHillDubsdread from "../../golfCourses/cogHillDubsdread";
import cogHillRavines from "../../golfCourses/cogHillRavines";
import wildHorse from "../../golfCourses/wildHorse";
import eagleRanch from "../../golfCourses/eagleRanch";
import redlandsMesa from "../../golfCourses/redlandsMesa";
import soldierHollow from "../../golfCourses/soldierHollow";
import yochaDehe from "../../golfCourses/yochaDehe";

const GolfMap = () => {
    window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('google-map'), {
            zoom: 7,
            center: {lat: 43.838, lng: -79.084} // open to Pickering
        });

        angusGlen.init(map);
        ballantrae.init(map);
        bardmoor.init(map);
        batteauxCreek.init(map);
        blackDiamond.init(map);
        bondHead.init(map);
        bunkerHill.init(map);
        burford.init(map);
        bushwood.init(map);
        carruthersCreek.init(map);
        cherryDowns.init(map);
        cinnamonHill.init(map);
        cogHillDubsdread.init(map);
        cogHillRavines.init(map);
        copperCreek.init(map);
        creekside.init(map);
        deerCreekNorth.init(map);
        deerCreekSouth.init(map);
        deerhurstHighlands.init(map);
        deerhurstLakeside.init(map);
        doonValley.init(map);
        dunedin.init(map);
        eagleRanch.init(map);
        eaglesNest.init(map);
        eastBay.init(map);
        foxbridge.init(map);
        foxRun.init(map);
        glenCedars.init(map);
        grandValleyGolf.init(map);
        greySilo.init(map);
        halfMoon.init(map);
        hardRockCanaBay.init(map);
        hawthorneValley.init(map);
        ingersoll.init(map);
        innerkip.init(map);
        innisbrookCopperhead.init(map);
        kapaluaPlantation.init(map);
        lakeridgeLinks.init(map);
        meadowbrook.init(map);
        millRun.init(map);
        moccasinWallow.init(map);
        monterra.init(map);
        oakridge.init(map);
        ospreyValleyHeathlands.init(map);
        otterCreek.init(map);
        pinestone.init(map);
        rebelCreek.init(map);
        redlandsMesa.init(map);
        riverside.init(map);
        riverStrand.init(map);
        royalAshburn.init(map);
        salemRidge.init(map);
        sallyCreek.init(map);
        savannahGolfLinks.init(map);
        senecaHickoryStick.init(map);
        soldierHollow.init(map);
        tarandowah.init(map);
        timberRidge.init(map);
        watsonsGlen.init(map);
        whisperingRidge.init(map);
        whitevale.init(map);
        wildHorse.init(map);
        wolfRun.init(map);
        woodstockMeadows.init(map);
        wyndance.init(map);
        yochaDehe.init(map);

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