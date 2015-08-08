//data, grabbed from out dataSets.js file, to be used in our visualizations
var data = dataSet;
var tornadoes = data.tornadoesInUS.data;

var makeTornadoMonths = function (data){
  var arr = [];
  for (var i = 0; i < data.length; i++){
    arr.push(data[i].slice(2));
  }
  return arr;
}

var tornadoMonths = makeTornadoMonths(tornadoes);

// console.log(tornadoMonths)

var w = 600;
var h = 600;
var padding = 70
var barPadding = 1;

// var wCir = 1000
// var hCir = 1000


// var scaleCir = d3.scale.linear()
//                         .domain([d3.min(tornadoes, function(d){return d[1]}),
//                          d3.max(tornadoes, function(d){return d[1]})
//                          ])
//                        .range([5, 50])

var minX = d3.min(tornadoes, function(d){return d[0]})
var maxX = d3.max(tornadoes, function(d){return d[0]})

var minY = d3.min(tornadoes, function(d){return d[1]})
var maxY = d3.max(tornadoes, function(d){return d[1]})

var xScale = d3.scale
               .linear()
               .domain([parseInt(minX), parseInt(maxX)])
               .range([0, w-padding]);

var yScale = d3.scale
               .linear()
               .domain([maxY, minY])
               .range([40, h-padding]);

var opacity = d3.scale
                .linear()
                .domain([minY, maxY])
                .range([0,1])


var svg = d3.select('body')
                .append('svg')
                .attr("width", w)
                .attr("height", h);

var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient('bottom')
              .ticks(10);


var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient('left')
                  .ticks(6);

var date = d3.time.format('%Y-%m-%d')




svg.append('g')
   .attr("class", "axis")
   .attr('transform', 'translate(40, ' + (h-padding+5) + ')')
   .call(xAxis)

svg.append('g')
   .attr('class', 'axis')
   .attr('transform', 'translate(' + 40 + ', 5)')
   .call(yAxis)

var points = svg.selectAll('circle')
   .data(tornadoes)
   .enter()
   .append('circle')
   .attr('cx', function(d){return xScale(parseInt(d[0]))+40})
   .attr('cy', function(d) {return yScale(d[1])+ 5})
   .attr('r', function(d){return h/yScale(d[1])})
   .attr('fill', function(d){return 'rgba(250, 100 , 150,'+opacity(d[1])+')'});


points.transition()
      .delay(function(d, i){
        return i*30;
      })
      .duration(4000)
      .attr('r', function(d) {return (opacity(d[1])*3)+'%'})


   // .attr('fill', function(d){return "rgba(255, "+yScale(d[1])/255+", 0, "+ opacity(d)+")"})

// var pie = d3.layout.pie(tornadoMonths)
//             .value(function(d, i){return i})

// var arc = d3.svg.arc()
//             .innerRadius(0)
//             .outerRadius(100)

// var arcs = svgCir.selectAll('g.arc')
//                  .data(pie(tornadoMonths))
//                  .enter()
//                  .append('g')
//                  .attr('class', 'arc')
//                  .append('path')
//                  .attr('transform', function(d){return 'translate('+ d + ', ' + d + ')'})
//                  .attr('d', arc)


// var pie = d3.layout.pie()
//             .sort(null)
//             .value(function(d) {return d});

// var g = svgCir.selectAll('.arc')
//             .data(pie(tornadoes))
//             .enter().append('g')
//             .attr('class', 'arc');

// var arcs = d3.svg.arc()
//               .outerRadius(200)
//               .innerRadius(0);

// svgCir.selectAll('circle')
//       .data(tornadoes)
//       .enter()
//       .append('circle')
//       .attr('cx', function(d, i){return i * wCir/tornadoes.length})
//       .attr('cy', 500)
//       .attr('r', function(d){return scaleCir(d[1])})




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

