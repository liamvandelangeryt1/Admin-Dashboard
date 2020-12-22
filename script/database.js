const laadJsonData = function() {
    //ophalen interne JSON file
  fetch('./json/users.json')
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
      verwerkenUsers(jsonObject);
    
      
      
    })
    //als uitvoeren op een fout loopt
    .catch(function(error) {
      console.error(`fout bij verwerken json ${error}`);
    });
  };

  const verwerkenUsers = function(jsonObject) {
    const objects = jsonObject.users;
console.log(objects)


    let html_screen = "";
        
    html_screen += `
    <tr class="c-table-row__header">
    <th class="c-table-th">ID</th>
    <th class="c-table-th">Name</th>
    <th class="c-table-th">E-mail</th>
    <th class="c-table-th">Type</th>
    <th class="c-table-th">View time</th>
    <th class="c-table-th">Adress</th>
    <th class="c-table-th">Phone</th>
  </tr>`;

  for(const object of objects){
    const id= object.id;
    const firstName =object.firstName;
    const lastName = object.lastName;
    const email = object.email;
    const status = object.status;
    const viewTime = object.viewTime;
    const adress = object.address.city;
    const phoneNumber = object.phoneNumber[1].number;

 
        
        html_screen += `
        <tr class="c-table-row">
        <td class="c-table-td">${id}</th>
        <td class="c-table-td">${firstName} ${lastName}</th>
        <td class="c-table-td">${email}</th>
        <td class="c-table-td">${status}</th>
        <td class="c-table-td">${viewTime}</th>
        <td class="c-table-td">${adress}</th>
        <td class="c-table-td">${phoneNumber}</th>
      </tr>`;
                        
     
    }
    
    document.querySelector(".js-db-users").innerHTML = html_screen;


  };



  document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM geladen');
    laadJsonData();
  });