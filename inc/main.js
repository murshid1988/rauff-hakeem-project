var mymap = L.map('mapid').setView([7.8731, 80.7718], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXVyc2hpZDE5ODgiLCJhIjoiY2o5NXgwaHJmNG44bzJybjVwZDgzb3JlciJ9.rgUHMOi8pnRCYyyuChqXzQ'
}).addTo(mymap);

// mymap.createPane('title');
// mymap.getPane('title').style.display = 'none';

var marker1 = L.marker([7.2442, 81.7459]).addTo(mymap);
marker1.bindPopup("<b>Malaysia</b>").openPopup();

var marker2 = L.marker([7.4144, 81.8306]).addTo(mymap);
marker2.bindPopup("<b>Dubai</b>").openPopup();

var marker3 = L.marker([7.3930, 81.8361]).addTo(mymap);
marker3.bindPopup("<b>Bahrain</b>").openPopup();

var marker4 = L.marker([8.0408, 79.8394]).addTo(mymap);
marker4.bindPopup("<b>France</b>").openPopup();