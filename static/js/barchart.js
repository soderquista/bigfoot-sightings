// Get the URL endpoint

const url = "http://127.0.0.1:5000/api/v1.0/sightings"

function barChart(data) {

  var spring = [];
  var summer = [];
  var fall = [];
  var winter = [];
  var season = ["Spring", "Summer", "Fall", "Winter"];

  for (var i = 0; i < data.data.length; i++) {
    if (data.data[i].season == "Spring") {
      spring.push(data.data[i].number);
    } else if (data.data[i].season == "Summer") {
      summer.push(data.data[i].number);
    } else if (data.data[i].season == "Fall") {
      fall.push(data.data[i].number);
    } else if (data.data[i].season == "Winter") {
      winter.push(data.data[i].number);
    }

  };

  let count = [spring.length, summer.length, fall.length, winter.length]

	let trace1 = {
		type: "bar",
		x: season,
		y: count
  	};
    
  console.log("Spring: " + spring.length);
  console.log("Summer: " + summer.length);
  console.log("Fall: " + fall.length);
  console.log("Winter: " + winter.length);

	let barChart = [trace1];

  let layout = {
    title: 'Total Bigfoot Sightings by Season'
  };

	Plotly.newPlot("bar", barChart, layout);

	console.log("Bar Chart Printed")
	
};



// Use D3 to get sample names and populate the drop-down selector
d3.json(url).then(function (data) {
            
            // // Set a variable for the sample state
            // var year = convertTimestamp(timestamp);

            // // Use D3 to select the dropdown menu
            // var dropdownMenu = d3.select("#selDataset");
          console.log(data.data.length);
            // // Add year to dropdown menu
            //for (var i = 1; i < data.data.length; i++) {
            //   var timestamp = parseInt(data[i].date.$date.$numberLong);
            //   var season= data[i].season;

            //     season.forEach((i) => {
        
            //         dropdownMenu.append("option")
            //         .text(year)
            //         .property("value",i);
            //     });

    
            // // Set the first sample from the list
            // let sample_one = season[0];
    
            // // Log the value of sample_one
            // console.log(sample_one);
            //         // Build the initial plots
            barChart(data);
            

    });
// // Creating the map object
// var myMap = L.map("map", {
//     center: [37.6000, -95.6650],
//     zoom: 4.5
//   });
  
//   // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
//   }).addTo(myMap);
//   function getColor(season) {
//     return season= "Summer" ? "#FF0D0D" :
//         season = "Winter" ? "#FF4E11" :
//         season = "Fall" ? "#FF8E15" :
//         "#FFB92E"}; 
    
//   // Drawing the circles
// function drawCircle(latitude, longitude) {
 
    
//     return L.circle(latitude, longitude, {
//             fillOpacity: 0.5,
//             color: getColor(depth),
//             fillColor: getColor(depth),
            
//     });
//   };


// Function to covert UNIX timestamp to datetime
function convertTimestamp(x) {
  var d = new Date(x),
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
    dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
    ampm = 'AM',
    time;

  if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
  } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
  } else if (hh == 0) {
      h = 12;
  }

  time = mm + '-' + dd + '-' + yyyy + ', ' +  h + ':' + min + ' ' + ampm;
  return yyyy;
};