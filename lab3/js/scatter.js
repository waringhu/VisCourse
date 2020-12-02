function draw(date) { 
    var width = $("#scatter").width();
    var height = $("#scatter").height() * 0.8;
    var padding = 60;

    // console.log(date);

    d3.json("./assets/test.json", function(data) {
        console.log(data[date]);

        var dataset = [].concat(data[date]);

        var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var xScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function(d) {
                return d[0];
            })])
            .range([padding, width - padding * 2]);

        var yScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function(d) {
                return d[1];
            })])
            .range([height - padding, padding]);

        var rScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function(d) {
                return d[1];
            })])
            .range([5, 30]);

        var xAxis = d3.svg.axis()
            .scale(xScale)
            .ticks(10) // 刻度数量
            .orient("bottom");
        
        var yAxis = d3.svg.axis()
            .scale(yScale)
            .ticks(7)
            .orient("left");
        
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0, " + (height - padding) + ")")
            .call(xAxis);
        
        
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + ")")
            .call(yAxis);
    })
}


