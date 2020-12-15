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
    verwerkenGraph(jsonObject);
    verwerkenGraph2(jsonObject);
    
    
  })
  //als uitvoeren op een fout loopt
  .catch(function(error) {
    console.error(`fout bij verwerken json ${error}`);
  });
};


const verwerkenGraph = function(jsonObject) {

  const object = jsonObject;

  for (let step = 0; step < 4; step++) {
    var graph = object.Graphs[step]
    var BackgroundColor = object.BackgroundColor[step]
    var BorderColor = object.BorderColor[step]
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
            backgroundColor: BackgroundColor,
            borderColor: BorderColor,
            borderWidth: 1.4
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


const verwerkenGraph2 = function(jsonObject) {

  const object = jsonObject;


    var graph = object.Graphs[4]
    var graph2 = object.Graphs[2]
    var BackgroundColor = object.BackgroundColor[4]
    var BorderColor = object.BorderColor[4]
    console.log(graph)
     
  var ctx = document.getElementById(`myChart4`).getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
        
        {
            label: '# of Votes',
            data: object.Graphs[0], 
            pointRadius: 0,
            backgroundColor: object.BackgroundColor[4],
            borderColor: object.BorderColor[0],
            borderWidth: 1.4
        },
        {
          label: '# of Votes',
          data: object.Graphs[1], 
          pointRadius: 0,
          backgroundColor: object.BackgroundColor[4],
          borderColor: object.BorderColor[1],
          borderWidth: 1.4
      },

      {
        label: '# of Votes',
        data: object.Graphs[2], 
        pointRadius: 0,
        backgroundColor: object.BackgroundColor[4],
        borderColor: object.BorderColor[2],
        borderWidth: 1.4
    },

    {
      label: '# of Votes',
      data: object.Graphs[3], 
      pointRadius: 0,
      backgroundColor: object.BackgroundColor[4],
      borderColor: object.BorderColor[3],
      borderWidth: 1.4
  }
      ]
    },
    options: {
      legend: {
        display: false //This will do the task
     },
     maintainAspectRatio: false,
     
     
      scales: {
        
           xAxes: [{
              gridLines: {
                 display: true
              },
              ticks: {
                display: true
            }
           }],
           yAxes: [{
              gridLines: {
                 display: true
              },
              ticks: {
                display: true
            }
           }]
      }
   }
});


}


//deze regels worden eerst uitgevoerd, alles hangt start vanaf hier.
document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  laadJsonData();
});