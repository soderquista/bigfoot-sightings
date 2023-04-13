# bigfoot-sightings

## Data Preparation
Data on reported Bigfoot sightings was downloaded in a .csv and .json format. There are 5,082 records total, though data entered varies. The oldest recorded date is 1869 and data runs through 2/28/23. The bfro_reports_geocoded.csv file contains the most information about individual sightings, including:

<ul>
  <li>a report title with a brief, one-sentence summary - 4,104 records</li>
  <li>date of the sighting (if available) - 4,104 records</li>
  <li>the season the sighting took place in - 5,082 records</li>
  <li>latitude and longitude (if available) - 4,104 records</li>
  <li>the state the sighting took place in - 5,082 records</li>
  <li>the county the sighting took place in (if available) - 5,082 records</li>
  <li>weather at the time of the sighting (if available) - 4,102 records</li>
  <li>a detailed description of the event, as entered by the viewer/submitter - 5,043 records</li>
</ul>

MongoDB was used to turn this .csv into a .json format that could then be uploaded to an API through Flask.

## How to Access Data
Download this repository. In Terminal/Command Prompt, activate a PythonData shell and run `http:server`. Open the app.py file through Python. A web address will appear in a Terminal/Command Prompt window. Navigate to that address. The JSON data is stored at `http://127.0.0.1:5000/api/v1.0/sightings`. Leave this window open while navigating the two webpages in the repository.

## Bigfoot Sighting Map
The webpage `bigfoot-map.html` is a Leaflet map of Bigfoot sighting location reports in the United States of America.

## Bigfoot Sighting Dashboard
The webpage `dashboard.html` is an interactive dashboard that shows the number of Bigfoot sightings in each county of each state. There is also a static graph of the number of Bigfoot sightings each season. 

### Data and Code Sources
The dataset explored is the Bigfoot sightings as reported to the <a href=https://www.bfro.net/>Bigfoot Field Researchers Organization</a> (BFRO). The dataset was found on <a href='https://data.world/timothyrenner/bfro-sightings-data/workspace/file?filename=bfro_reports_geocoded.csv'>data.world, uploaded by Timothy Renner</a>.

Unix DateTime JavaScript conversion function `convertTimestamp` based on <a href=https://stackoverflow.com/questions/24170933/convert-unix-timestamp-to-date-time-javascript>StackOverflow answer by Kamal Shooryabi 7/21/2018 and modified by Ivan 6/21/2018</a>.

Code in `/static/js/dashboad.js` to get a dictionary of the count of each county is from the <a href=https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript>StackOverflow answer by isnot2bad 10/1/2015</a>.

Code in `/static/js/dashboad.js` to get an array of counties matched with an array of their counts is based on <a href=https://stackoverflow.com/questions/10654992/how-can-i-get-a-collection-of-keys-in-a-javascript-dictionary>StackOverflow answer by alex 5/18/2012</a>.

