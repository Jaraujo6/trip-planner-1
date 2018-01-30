const mapboxgl = require("mapbox-gl");
const markerFactory = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiZG9tbmlrIiwiYSI6ImNqZDF4YmFraDFrZmkycHA0eWl1cWt4b3AifQ.5GxXUApS0xDeOAryWPXhqA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

markerFactory('activities', [-74.009, 40.705]).addTo(map);
