// Get the URL endpoint

const url = "http://127.0.0.1:5000/api/v1.0/sightings"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Initialize the dashboard at start up 
function init() {
        // Use D3 to select the dropdown menu
        let dropdownMenu = d3.select("#selDataset");

        // Use D3 to get sample names and populate the drop-down selector
        d3.json(url).then((data) => {
            
            // Set a variable for the sample state
            let state = data[i].state;
            let season= data[i].season;
    
            // Add  samples to dropdown menu
            state.forEach((id) => {
    
                // Log the value of id for each iteration of the loop
                console.log(id);
    
                dropdownMenu.append("option")
                .text(id)
                .property("value",id);
            });
            season.forEach((id) => {
    
                // Log the value of id for each iteration of the loop
                console.log(id);
    
                dropdownMenu.append("option")
                .text(id)
                .property("value",id);
            });
    
            // Set the first sample from the list
            let sample_one = state[0];
            let sample_two = season[0];
    
            // Log the value of sample_one
            console.log(sample_one);
            console.log(sample_two);
                    // Build the initial plots
        buildMetadata(sample_one);
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
        buildGaugeChart(sample_one);

    });
};
// Creating the map object
var myMap = L.map("map", {
    center: [37.6000, -95.6650],
    zoom: 4.5
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
  }).addTo(myMap);
  function getColor(season) {
    return season= "Summer" ? "#FF0D0D" :
        season = "Winter" ? "#FF4E11" :
        season = "Fall" ? "#FF8E15" :
        season = "Spring" ? "#FFB92E" 
    
  // Drawing the circles
function drawCircle(latitude, longitude) {
 
    
    return L.circle(latitude, longitude, {
            fillOpacity: 0.5,
            color: getColor(depth),
            fillColor: getColor(depth),
            
    });
  };
  // Call the initialize function
init();