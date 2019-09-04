import React from "react";

const description = (title, city, designer, website) => {
  const dash = designer ? ' - ' : '';

  return (
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" className="firstHeading">{title}</h1>
      <div id="bodyContent">
        <p><b>{city}{dash}</b>{designer}</p>
        <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
      </div>
    </div>
  )
} ;

const init = (map, title, coords, description, iconUrl) => {
  var infowindow = new window.google.maps.InfoWindow({
    content: description
  });
  var marker = new window.google.maps.Marker({
    position: coords,
    map: map,
    title: title,
    icon: {
      url: iconUrl
    }
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
};

export default {
  description,
  init
}