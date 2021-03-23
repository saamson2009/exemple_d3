// créer un tableau de données
let donnees = [30, 60, 120, 340]

let corps = d3.select('body');
// ajouter un canevas à la page
let canevas = corps.append('svg')
    .attr('width', 1000)
    .attr('height', 1000);

//  ajouter un cercle

// canevas.append('circle')
//     .attr('cx', 300)
//     .attr('cy', 300)
//     .attr('r', 40);

// ajout autant de cercle que de données asd

canevas.selectAll('circle')
    .data(donnees)
    .enter()
    .append('circle')
    // d pour données i pour index
        .attr('cx', (d => d))
        .attr('cy', 500)
        .attr('r', (d,i) => 5+i*20)
        .style('opacity', 0.5)
