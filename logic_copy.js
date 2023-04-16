// Create map object
var myMap = L.map("map", {
    center: [40, -95],
    zoom: 5
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Flask-based JSON of bigfoot sighting data
var link = "http://127.0.0.1:5000/api/v1.0/sightings";

//Function to open sidebar on marker click
var sidebar = L.control.sidebar({
  autopan: true,
  closeButton: true,
  container:'3757'
}).addTo(myMap);
data = [];
var lastPanel = {}
//Grab and log JSON data.
d3.json(link).then(function(e){
  data.push(e.data);
});

//Find index of marker in JSON data to report relevant title, county, and observational report.
function handleClick(e) {
  panelContent = {}
  var index = e.sourceTarget.options.ma_index
  // Create sidebar panel.
    var panelContent = {
      id: data[0][index].geohash,
      tab: `${index}`,
      pane: `<h2>${new Date(parseInt(data[0][index].date.$date.$numberLong)).toDateString().slice(0,15)} (${data[0][index].season})</h2><h3>${data[0][index].title}</br></br> Weather: ${data[0][index].conditions}. </h3><p>"${data[0][index].observed}"</p>`,
      title: data[0][index].county
    };
    // Add sidebar panel to the sidebar and open the sidebar.
    sidebar.addPanel(panelContent);
    sidebar.open(panelContent.id);
    lastPanel = panelContent;
//  })
};


// Create a new marker cluster group.
var markers = L.markerClusterGroup();

// Getting JSON data
d3.json(link).then(function(data) {

    markers.clearLayers();
    myMap.removeLayer(markers);

     for (var i = 1; i < data.data.length; i++) {
      
     //Check for latitude/longitude values in JSON 
      if (data.data[i].latitude) {

        var lat = data.data[i].latitude
        var long = data.data[i].longitude
        // Add a new marker to the cluster group, and bind a popup.
        var marker = L.marker([lat, long], { ma_index: i });

        //Create hoverover popup functions to display popUp info.
        marker.on('mouseover', function (e) {
          this.openPopup();
        });
        marker.on('mouseout', function (e) {
          this.closePopup();
        });

          //Call click function on marker click for sidebar.
        marker.on('click', handleClick);

        };
        if (data.data[i].date) {
          markers.addLayer(marker.bindPopup(`<h3>${new Date(parseInt(data.data[i].date.$date.$numberLong)).toDateString().slice(0,15)}</h3>`+`<p>${data.data[i].title}. <b>Click for more info.</b></p>`));
      }};
        //layer.
        

  // Add our marker cluster layer to the map.
  myMap.addLayer(markers);
    });
