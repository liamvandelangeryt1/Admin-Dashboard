// d3.json(`json/users.json`, function(error, data) {
var jsons = ["data", "data", "data", "data", "data"];
for (let step = 0; step < 5; step++) {


       // set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%Y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
.x(function(d) { return x(d.Date); })
.y(function(d) { return y(d.Imports); });
// define the line
var valueline2 = d3.line()
.x(function(d) { return x(d.Date); })
.y(function(d) { return y(d.Exports); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin

var svg = d3.select("body").append("svg")

.attr("class", step)
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

      

function draw(data, country) {



var data = data[country];

// format the data
data.forEach(function(d) {
  d.Date = parseTime(d.Date);
  d.Imports = +d.Imports;
  d.Exports = +d.Exports;
});

// sort years ascending
data.sort(function(a, b){
return a["Date"]-b["Date"];
})

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.Date; }));
y.domain([0, d3.max(data, function(d) {
  return Math.max(d.Imports, d.Exports); })]);

// Add the valueline path.
svg.append("path")
  .data([data])
  .attr("class", "line")
  .attr("d", valueline);
// Add the valueline path.
svg.append("path")
  .data([data])
  .attr("class", "line")
  .attr("d", valueline2);  
// Add the X Axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add the Y Axis
svg.append("g")
  .call(d3.axisLeft(y));
}
// Get the data
d3.json(`json/${jsons[step]}.json`, function(error, data) {
if (error) throw error;

// trigger render
draw(data, "Afghanistan");
});   
}



