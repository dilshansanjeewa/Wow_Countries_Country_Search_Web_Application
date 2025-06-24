function searchCountry(){
     
     let countryName= document.getElementById("txtCountryName").value;

     fetch("https://restcountries.com/v3.1/name/"+countryName).then(res=>res.json()).then(data=>{
          //console.log(data);

          let flag = document.getElementById("divFlag");
          let coatOfArms = document.getElementById("divCoatOfArms");
          let root = document.getElementById("tblCountryDetails");

          data.forEach(element => {

               flag.innerHTML = `
                    <h3 class="text-dark">Flag</h3>
                    <img src="${element.flags.svg}" width="350px" style="border: 1px solid #000;" alt="">
               `

               coatOfArms.innerHTML = `
                    <h3 class="text-dark">Coat of arms</h3>
                    <img src="${element.coatOfArms.svg}" width="150px" style="border: 1px solid #000;" alt="">
               `

               root.innerHTML = ` <tr class="table-dark ">
                    <td>Common name</td>
                    <td>${element.name.common}</td>
               </tr>
               <tr class="table-striped">
                    <td>official name</td>
                    <td>${element.name.official}</td>
               </tr>
               <tr class="table-dark">
                    <td>Capital</td>
                    <td>${element.capital[0]}</td>
               </tr>
               <tr class="table-striped">
                    <td>Area</td>
                    <td>${element.area}</td>
               </tr>
               <tr class="table-dark">
                    <td>Region</td>
                    <td>${element.region} ->${element.subregion} </td>
               </tr>
               <tr class="table-striped">
                    <td>Population</td>
                    <td>${element.population}</td>
               </tr>
               <tr class="table-dark">
                    <td>Time zones</td>
                    <td>${element.timezones[0]}</td>
               </tr>
               <tr class="table-striped">
                    <td>Google map</td>
                    <td><a href="${element.maps.googleMaps}" target="_blank">Clic Me!</a></td>
               </tr>`

          });
     })     
}