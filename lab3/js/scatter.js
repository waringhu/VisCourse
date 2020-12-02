function draw(date) { 
    $("#scatter").empty();

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

        // var rects = svg.selectAll("circle")
        svg.selectAll("circle")
            .data(dataset).enter()
            .append("circle")
            .attr("cx", function(d) {
                return d[0];
            })
            .attr("cy", function(d) {
                return d[1];
            })
            .attr("r", function(d) {
                return rScale(d[1]);
            })
            .attr("fill", "white")
            .transition() // 开启动画
            .duration(1000) // 动画持续时间
            .ease("elastic") // 动画变化方式 --- linear, circle
            .delay(function(d, i) {
                return 100 * i;
            })
            .attr("fill", "steelblue")

        svg.selectAll("circle")
            .on("mouseover", function(d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill", "yellow")
            })
            .on("mouseout", function(d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill", "steelblue")
            })
            .on("click", function(d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill", "red");
            })
    })
}


