var width = $("#bar").width();
var height = $("#bar").height() * 0.8;

var svg = d3.select("#bar")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

console.log(height);

var padding = {left: 60, right: 60, top: 60, bottom: 60};

var dataset= [11, 22, 33, 44, 55, 66, 77];
var xdata = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 比例尺
var xScale = d3.scale.ordinal() // 离散型比例此，连续型：linear
    .domain(xdata)
    .rangeRoundBands([0, width - padding.left - padding.right]);

var pScale = d3.scale.ordinal()
    .domain(d3.range(xdata.length))
    .rangeRoundBands([0, width - padding.left - padding.right]);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    // .domain([d3.min(dataset), d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);

// 坐标轴
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
    .call(xAxis);


svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .call(yAxis);