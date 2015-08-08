//data, grabbed from out dataSets.js file, to be used in our visualizations
var data = dataSet;
var tornadoes = data.tornadoesInUS.data;

var w = 500;
var h = 500;
var barPadding = 1

var wCir = 1000
var hCir = 1000


var scaleCir = d3.scale.linear()
                        .domain([d3.min(tornadoes, function(d){return d[1]}),
                         d3.max(tornadoes, function(d){return d[1]})
                         ])
                       .range([5, 50])


var svgCir = d3.select('body')
                .append('svg')
                .attr("width", wCir)
                .attr("height", hCir);


svgCir.selectAll('circle')
      .data(tornadoes)
      .enter()
      .append('circle')
      .attr('cx', function(d, i){return i * wCir/tornadoes.length})
      .attr('cy', 500)
      .attr('r', function(d){return scaleCir(d[1])})



// var svg = d3.select('body') //
//             .append('svg')
//             .attr("width", w)
//             .attr("height", h);

// svg.selectAll('rect')
//    .data(unrulyPassengers)
//    .enter()
//    .append('rect')
//    .attr('x', function(d, i){
//      return i * (w / unrulyPassengers.length)
//    })
//    .attr('y', function(d){
//      return h - d[1] - 80;
//    })
//    .attr('width', w / unrulyPassengers.length - barPadding)
//    .attr('height', function(d){
//      return d[1]
//    })
//    .attr('fill', function(d){
//      return "rgb(" + d[1]+", 0," + (255-d[1]) + ")";
//    });

// svg.selectAll('text')
//    .data(unrulyPassengers)
//    .enter()
//    .append('text')
//    .text(function(d){
//      return d[0]
//    })
//    .attr('x', function(d, i){
//      return i * (w / unrulyPassengers.length) + (w / unrulyPassengers.length - barPadding)/2;
//    })
//    .attr("font-family", "verdana")
//    .attr("font-size", 10)
//    .attr("textLength", function(d){return d[0].length*8})
//    .attr("y", 420)
//    .attr('writing-mode', 'tb')

