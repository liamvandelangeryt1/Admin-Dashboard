
let HaalIdOpUitQueryString = function () {
  //lees https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  //lees https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams




};





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
      verwerkUser(jsonObject);
    
      
      
    })
    //als uitvoeren op een fout loopt
    .catch(function(error) {
      console.error(`fout bij verwerken json ${error}`);
    });
  };



  const verwerkUser = function(jsonObject) {
    
  let params = (new URL(document.location)).searchParams;
  let userid = params.get('userid');0
    const object = jsonObject.users[userid-1];
    console.log(object)

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
                      <input type="number" name="id" id="id" class="form-control form-control-lg c-form__input" value="${id}" min="0" required />
                      <label class="c-form__label" for="naam"> Id </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="text" name="name" id="name" class="form-control form-control-lg c-form__input" value="${firstName} + ${lastName}" minlength="2" required />
                      <label class="c-form__label" for="naam"> Name </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="text" name="username" id="usernaam" class="form-control form-control-lg c-form__input" value="${userName}" minlength="2" required />
                      <label class="c-form__label" for="naam"> UserName </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="date" id="date" name="date" class="form-control form-control-lg c-form__input" value="${birthday}" required />
                      <label class="c-form__label" for="date">date of birth</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="text" id="adress" name="adress" class="form-control form-control-lg c-form__input" required value="${adress.street} ${adress.houseNumber} " />
                      <label class="c-form__label" for="adress"> Adress </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group c-form__group">
                      <input type="number" name="zipcode" id="zipcode" class="form-control form-control-lg c-form__input" min="1000" max="9999" value="${adress.zipCode}" required />
                      <label class="c-form__label" for="zipcode"> zipcode </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group c-form__group">
                      <input type="email" name="city" id="city" class="form-control form-control-lg c-form__input" value="${adress.zipCity}" required />
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
                        value="${phoneNumber}"
                      />
                      <label class="c-form__label" for="gsm"> Phone number </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group c-form__group">
                      <input type="email" id="email" name="email" class="form-control form-control-lg c-form__input" value="${email}" />
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

    
    
  });