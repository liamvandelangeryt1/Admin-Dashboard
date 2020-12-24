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
  </tr>
  `;

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
        <tr id= "filter" class="c-table-row c-table-row__reeks">
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


  const verwerkUser = function(jsonObject) {
    const objects = jsonObject.users;
    console.log(objects)

const id= object.id;
const firstName =object.firstName;
const lastName = object.lastName;
const userName = object.username;
const email = object.email;
const status = object.status;
const viewTime = object.viewTime;
const adress = object.address;
const birthday = object.dateOfBirth;
const phoneNumber = object.phoneNumber[1].number;

    let html_screen = "";
        
    html_screen += `

    <form class="row c-form js-form" id="js-needsValidation">
                <div class="row">
                  <div class="col-12">
                    <div class="c-form__group">
                      <input type="number" name="id" id="id" class="form-control form-control-lg c-form__input" placeholder="${id}" min="0" required />
                      <label class="c-form__label" for="naam"> Id </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="text" name="name" id="name" class="form-control form-control-lg c-form__input" placeholder="${firstName} + ${lastName}" minlength="2" required />
                      <label class="c-form__label" for="naam"> Name </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="text" name="username" id="usernaam" class="form-control form-control-lg c-form__input" placeholder="${userName}" minlength="2" required />
                      <label class="c-form__label" for="naam"> UserName </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="date" id="date" name="date" class="form-control form-control-lg c-form__input" placeholder="${birthday}" required />
                      <label class="c-form__label" for="date">date of birth</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="text" id="adress" name="adress" class="form-control form-control-lg c-form__input" required placeholder="${adress.street} ${adress.houseNumber} " />
                      <label class="c-form__label" for="adress"> Adress </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group c-form__group">
                      <input type="number" name="zipcode" id="zipcode" class="form-control form-control-lg c-form__input" min="1000" max="9999" placeholder="${adress.zipCode}" required />
                      <label class="c-form__label" for="zipcode"> zipcode </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group c-form__group">
                      <input type="email" name="city" id="city" class="form-control form-control-lg c-form__input" placeholder="${adress.zipCity}" required />
                      <label class="c-form__label" for="city"> city </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input
                        type="tel"
                        id="gsm"
                        name="phonenum"
                        pattern="((^[+\s0-9]{2,6}[\s\./0-
                                        9]*$))"
                        class="form-control form-control-lg c-form__input"
                        placeholder="${phoneNumber}"
                      />
                      <label class="c-form__label" for="gsm"> Phone number </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="email" id="email" name="email" class="form-control form-control-lg c-form__input" placeholder="${email}" />
                      <label class="c-form__label" for="email"> Email </label>
                    </div>
                  </div>
                </div>
                <button type="submit" class="o-button o-button--submit mt-3" id="js-button-submit">Update user information</button>
              </form>
  `;


    
    
    document.querySelector(".js-form").innerHTML = html_screen;


  };




  document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM geladen');
    laadJsonData();

    $("#trial").click(function () {
    
        var rows = $(".js-db-users").find("tr").hide();
        $(".c-table-row__header").show();
        rows.filter(":contains('trial')").show();
     });
    
     $("#total").click(function () {
         
        var rows = $(".js-db-users").find("tr").show();
       
     });
    
     $("#subscribed").click(function () {
   
    
        var rows = $(".js-db-users").find("tr").hide();
        $(".c-table-row__header").show();
        rows.filter(":contains('active')").show();
     });
    
  });