const laadJsonData = function() {
  //ophalen interne JSON file
fetch('./json/data.json')
  .then(function(response) {
    //antwoord van de server nakijken op het verzoek
    if (!response.ok) {
      //antwoord is niet ok. error wordt geworpen
      throw Error(`Probleem bij de fetch(). Status Code: ${response.status}`);
    } else {
      //antwoord is ok
      console.info('Er is een response teruggekomen van de server');
      return response.json();
    }
  })
  .then(function(jsonObject) {
    //functie uitgevoerd en json maken
    console.info('json object is aangemaakt');
    verwerkenData(jsonObject)
    
    
  })
  //als uitvoeren op een fout loopt
  .catch(function(error) {
    console.error(`fout bij verwerken json ${error}`);
  });
};


const verwerkenData = function(jsonObject) {

  const object = jsonObject;

  for (let step = 0; step < 3; step++) {
    var graph = object.Graphs[step]
    var Color = object.Color[step]
    console.log(graph)
     
  var ctx = document.getElementById(`myChart${step}`).getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: graph,
            pointRadius: 0,
            backgroundColor: Color,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false //This will do the task
     },
     maintainAspectRatio: false,
     
      scales: {
        
           xAxes: [{
              gridLines: {
                 display: false
              },
              ticks: {
                display: false
            }
           }],
           yAxes: [{
              gridLines: {
                 display: false
              },
              ticks: {
                display: false
            }
           }]
      }
   }
});
}}


//deze regels worden eerst uitgevoerd, alles hangt start vanaf hier.
document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  laadJsonData();
});