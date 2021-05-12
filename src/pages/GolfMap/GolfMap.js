import React from "react";

import "./GolfMap.css";

import {GOOGLE_API_KEY} from "../../config";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
import bondHeadNorth from "../../golfCourses/bondHeadNorth";
import bondHeadSouth from "../../golfCourses/bondHeadSouth";
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
import monarchBay from "../../golfCourses/monarchBay";
import remingtonParkviewValley from "../../golfCourses/remingtonParkviewValley";
import oaksOfStGeorge from "../../golfCourses/oaksOfStGeorge";
import kedronDells from "../../golfCourses/kedronDells";
import loraBay from "../../golfCourses/loraBay";
import cobbleBeach from "../../golfCourses/cobbleBeach";
import ospreyValleyHoot from "../../golfCourses/ospreyValleyHoot";
import ospreyValleyNorth from "../../golfCourses/ospreyValleyNorth";
import hockleyValley from "../../golfCourses/hockleyValley";
import hiddenbrooke from "../../golfCourses/hiddenbrooke";
import sharpPark from "../../golfCourses/sharpPark";
import berkeley from "../../golfCourses/berkeley";
import halfMoonBayOld from "../../golfCourses/halfMoonBayOld";
import gleneagles from "../../golfCourses/gleneagles";
import presidio from "../../golfCourses/presidio";
import lakeMerced from "../../golfCourses/lakeMerced";
import crystalSprings from "../../golfCourses/crystalSprings";
import halfMoonBayOcean from "../../golfCourses/halfMoonBayOcean";
import sandCanyon from "../../golfCourses/sandCanyon";
import rusticCanyon from "../../golfCourses/rusticCanyon";
import porterValley from "../../golfCourses/porterValley";
import oakQuarry from "../../golfCourses/oakQuarry";
import calClub from "../../golfCourses/calClub";
import eagleVines from "../../golfCourses/eagleVines";
import hardingPark from "../../golfCourses/hardingPark";
import northwood from "../../golfCourses/northwood";
import bodegaHarbour from "../../golfCourses/bodegaHarbour";
import angelesNational from "../../golfCourses/angelesNational";
import braemar from "../../golfCourses/braemar";
import richmond from "../../golfCourses/richmond";
import pasatiempo from "../../golfCourses/pasatiempo";
import carmelValleyRanch from "../../golfCourses/carmelValleyRanch";
import poppyHills from "../../golfCourses/poppyHills";
import santaRosa from "../../golfCourses/santaRosa";
import oldMac from "../../golfCourses/oldMac";
import bandonDunes from "../../golfCourses/bandonDunes";
import bandonTrails from "../../golfCourses/bandonTrails";
import pacificDunes from "../../golfCourses/pacificDunes";
import bandonPreserve from "../../golfCourses/bandonPreserve";
import valencia from "../../golfCourses/valencia";
import chardonnay from "../../golfCourses/chardonnay";
import banffSprings from "../../golfCourses/banffSprings";
import jasperParkLodge from "../../golfCourses/jasperParkLodge";

const GolfMap = (props) => {
    const addToMapByDate = [
        [monarchBay, new Date(2019, 9, 6)],
        [remingtonParkviewValley, new Date(2020, 4, 26)],
        [oaksOfStGeorge, new Date(2020, 4, 30)],
        [kedronDells, new Date(2020, 5, 4)],
        [bondHeadSouth, new Date(2020, 5, 8)],
        [loraBay, new Date(2020, 5, 9)],
        [cobbleBeach, new Date(2020, 5, 10)],
        [ospreyValleyNorth, new Date(2020, 5, 11)],
        [hockleyValley, new Date(2020, 5, 11)],
        [ospreyValleyHoot, new Date(2020, 5, 12)],
        [hiddenbrooke, new Date(2020, 6, 11)],
        [sharpPark, new Date(2020, 6, 13)],
        [berkeley, new Date(2020, 6, 18)],
        [halfMoonBayOld, new Date(2020, 6, 19)],
        [gleneagles, new Date(2020, 6, 27)],
        [presidio, new Date(2020, 6, 29)],
        [lakeMerced, new Date(2020, 6, 31)],
        [crystalSprings, new Date(2020, 7, 3)],
        [sandCanyon, new Date(2020, 7, 8)],
        [halfMoonBayOcean, new Date(2020, 8, 12)],
        [rusticCanyon, new Date(2020, 8, 30)],
        [porterValley, new Date(2020, 9, 2)],
        [oakQuarry, new Date(2020, 9, 3)],
        [calClub, new Date(2020, 9, 5)],
        [eagleVines, new Date(2020, 9, 10)],
        [hardingPark, new Date(2020, 9, 17)],
        [northwood, new Date(2020, 9, 24)],
        [bodegaHarbour, new Date(2020, 9, 25)],
        [angelesNational, new Date(2020, 9, 27)],
        [braemar, new Date(2020, 10, 26)],
        [richmond, new Date(2020, 10, 8)],
        [carmelValleyRanch, new Date(2021, 0, 19)],
        [pasatiempo, new Date(2021, 1, 14)],
        [poppyHills, new Date(2021, 2, 14)],
        [santaRosa, new Date(2021, 2, 21)],
        [banffSprings, new Date(2021, 7, 28)],
        [jasperParkLodge, new Date(2021, 7, 24)],
    ];

    window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('google-map'), {
            zoom: 8,
            center: {lat: 37.790480, lng: -122.401154} // open to SF
        });

        angusGlen.init(map);
        ballantrae.init(map);
        bandonDunes.init(map);
        bandonTrails.init(map);
        bandonPreserve.init(map);
        bardmoor.init(map);
        batteauxCreek.init(map);
        blackDiamond.init(map);
        bondHeadNorth.init(map);
        bunkerHill.init(map);
        burford.init(map);
        bushwood.init(map);
        carruthersCreek.init(map);
        chardonnay.init(map);
        cherryDowns.init(map);
        cinnamonHill.init(map);
        cogHillRavines.init(map);
        cogHillDubsdread.init(map);
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
        oldMac.init(map);
        ospreyValleyHeathlands.init(map);
        otterCreek.init(map);
        pacificDunes.init(map);
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
        valencia.init(map);
        watsonsGlen.init(map);
        whisperingRidge.init(map);
        whitevale.init(map);
        wildHorse.init(map);
        wolfRun.init(map);
        woodstockMeadows.init(map);
        wyndance.init(map);
        yochaDehe.init(map);

        const now = new Date();
        for (const [course, playedDate] of addToMapByDate) {
            if (now > playedDate) {
                course.init(map)
            }
        }

        initLegend(map);
    };

    const googleMapsScript = window.document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);

    const icons = {
        topHundredWorld: {
          name: 'Top 100 Courses - World - GOLF Magazine 2020',
          icon: iconLinks.topHundredWorld
        },
        topHundredPublicNorthAmerica: {
            name: 'Top 100 Public Courses - North America - GOLF Magazine 2021',
            icon: iconLinks.topHundredPublicNorthAmerica
        },
        topHundredCanada: {
            name: 'Top 100 Courses - Canada - SCOREGolf 2020',
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
            <a href="" onClick={() => props.setPageName('home')} id="back-button">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" className="back-button-fa" />
            </a>
            <div id="google-map" />
            <div id="legend"><h3>Legend</h3></div>
        </>
    );
};

export default GolfMap;