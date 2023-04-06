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



d3.json(link).then(function(data) {

     console.log(data.length)
});

// // Function to covert UNIX timestamp to datetime
// function convertTimestamp(x) {
//   var d = new Date(x),
//     yyyy = d.getFullYear(),
//     mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
//     dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
//     hh = d.getHours(),
//     h = hh,
//     min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
//     ampm = 'AM',
//     time;

//   if (hh > 12) {
//       h = hh - 12;
//       ampm = 'PM';
//   } else if (hh === 12) {
//       h = 12;
//       ampm = 'PM';
//   } else if (hh == 0) {
//       h = 12;
//   }

//   time = mm + '-' + dd + '-' + yyyy + ', ' +  h + ':' + min + ' ' + ampm;
//   return time;
// };

// // Function to determine choropleth color based on earthquake depth
// function getColor(depth) {
//   return depth > 90 ? '#ff0000':
//   depth > 70 ? '#ff9900':
//   depth > 50 ? '#ffcc33':
//   depth > 30 ? '#ffff66':
//   depth > 10 ? '#ccff00':
//   '#33ee33';
// };


// // Getting GeoJSON data
// d3.json(link).then(function(data) {

//   featureData = data.features
//   console.log(featureData)
 
//     // Loop through the data
//     for (var i = 0; i < featureData.length; i++) {
        
//     // Set the data location (lat, long, and depth) property to a variable
//     var location = data.features[i].geometry;

//     // Set data magnitude property to a variable
//     var magnitude = data.features[i].properties.mag

//     // Set earthquake depth to a variable
//     var depth = data.features[i].geometry.coordinates[2]

//     // Set circle marker properties to a variable
//     var circleOptions = {radius: magnitude*5,
//       color: 'black',
//       weight: 1,
//       fillColor: getColor(depth),
//       fillOpacity: 0.8
//     };

//     // Set time to a variable
//     var timestamp = data.features[i].properties.time

//     dateTime = convertTimestamp(timestamp)

//     // Create markers
//     new L.circleMarker([location.coordinates[1], location.coordinates[0]], circleOptions)
//     .bindPopup("<strong>Time: </strong>" + dateTime + "<br /><strong>Magnitude: </strong>" + magnitude +"<br /><strong>Location: </strong>" + data.features[i].properties.place +"<br /><strong>Depth: </strong>" + depth + " km")
//     .addTo(myMap);
//     }

//   });


//   //Legend plugin
//   L.control.Legend({
//     position: "bottomright",
//     title: "Earthquake Depth",
//     legends: [{
//       label: "-10-10",
//       type: 'rectangle',
//       color:'#ff0000',
//       fill: true,
//       fillColor: '#ff0000',
//       fillOpacity: 1
//      },
//      {label: "10-30",
//       type: 'rectangle',
//       color:'#ff9900',
//       fill: true,
//       fillColor: '#ff9900',
//       fillOpacity: 1
//      }
//     ]
//   }).addTo(myMap);


//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//    var div = L.DomUtil.create("div", "info legend");
//    var labels = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"];
//    var colors = ['#ff0000', '#ff9900', '#ffcc33', '#ffff66', '#ccff00','#33ee33']
//    var colorLabels = []
//    var legendInfo = "<h1>Eartquake Depth</h1>" +
//    "<div class=\"labels\">" +
//      "<div class=\"min\">" + labels[0] + "</div>" +
//      "<div class=\"mid1\">" + labels[1] + "</div>" +
//      "<div class=\"mid2\">" + labels[2] + "</div>" +
//      "<div class=\"mid3\">" + labels[3] + "</div>" +
//      "<div class=\"mid4\">" + labels[4] + "</div>" +
//      "<div class=\"mid5\">" + labels[5] + "</div>" +
//      "<div class=\"max\">" + labels[6] + "</div>" +
//    "</div>";
   
//    div.innerHTML = legendInfo;


//    labels.forEach(function(label, index) {
//     colorLabels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//    });

//     div.innerHTML += "<ul>" + colorLabels.join("") + "</ul>";
//     return div;
//    };


//  // Adding the legend to the map
//  legend.addTo(myMap);
 