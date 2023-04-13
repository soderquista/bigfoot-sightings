const apiUrl = "http://127.0.0.1:5000/api/v1.0";
const sightingsUrl = `${apiUrl}/sightings`;

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
//dropdown menu
async function createDropdownMenu() {
  const data = await fetchData(sightingsUrl);
  const dropdownMenu = d3.select("#selDataset");
  const states = data.data.map(({ state }) => state);
  const uniqueStates = [...new Set(states)];
  uniqueStates.forEach((state) => {
    dropdownMenu.append("option").text(state).property("value", state);
  });
  return uniqueStates[0];
}

async function buildStatePanel(state) {
  try {
    const data = await fetchData(sightingsUrl);
    const stateData = data.data.find(({ state: dataState }) => dataState === state);
    const statePanel = d3.select("#sample-state");
    statePanel.html("");
    Object.entries(stateData).forEach(([key, value]) => {
      statePanel.append("h5").text(`${key}: ${value}`);
    });
  } catch (error) {
    throw new Error(error);
  }
}

// building sightings in state by year bar chart
async function buildBarChart(state) {
  try {

    const data = await fetchData(sightingsUrl);
    const stateData = data.data.filter(({ state: dataState }) => dataState === state);

    //const tst = stateData[0].date.$date.$numberLong
    //console.log(tst)

    const tst2 = stateData.filter(item => item.hasOwnProperty('date'));
    console.log(tst2)

    if (tst2.length === 0) {
      return
    }


    const dates = tst2.map(({ date }) => new Date(parseInt(date.$date.$numberLong)).toDateString().slice(0, 15));
    const values = tst2.map(({ shape }) => shape);
    const layout = { title: `State Sightings for ${state} by Year` };
    Plotly.newPlot("bar", [{x: dates, y: values, type: "bar", orientation: "h"}], layout);
  } catch (error) {
    console.error(error);
    d3.select("#error-message").text("An error occurred while loading the data. Please try again later.");
  }
}
async function init() {
  const defaultState = await createDropdownMenu();
  await buildStatePanel(defaultState);
  await buildBarChart(defaultState);
}


// Function to build bar chart of total sightings by season
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

	Plotly.newPlot("bubble", barChart, layout);

	console.log("Bar Chart Printed")
	
};

// Print bar chart of total sightings by season
d3.json(sightingsUrl).then(function (data) {
  barChart(data);
});

function optionChanged(state) {
  buildStatePanel(state);
  buildBarChart(state);
}

init();