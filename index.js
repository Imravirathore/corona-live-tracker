function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let actualdata = JSON.parse(xhttp.responseText);


      console.log(actualdata);

      //Covid Data for India
      document.getElementById('ind_new_cases').innerHTML = actualdata.Countries[77].NewConfirmed;
      document.getElementById('ind_new_deaths').innerHTML = actualdata.Countries[77].NewDeaths;
      document.getElementById('ind_tot_cases').innerHTML = actualdata.Countries[77].TotalConfirmed;

        //Covid Data for China
        document.getElementById('chn_new_cases').innerHTML = actualdata.Countries[36].NewConfirmed;
        document.getElementById('chn_new_deaths').innerHTML = actualdata.Countries[36].NewDeaths;
        document.getElementById('chn_tot_cases').innerHTML = actualdata.Countries[36].TotalConfirmed;

         //Covid Data for Pakistan
            document.getElementById('pak_new_cases').innerHTML = actualdata.Countries[132].NewConfirmed;
            document.getElementById('pak_new_deaths').innerHTML = actualdata.Countries[132].NewDeaths;
            document.getElementById('pak_tot_cases').innerHTML = actualdata.Countries[132].TotalConfirmed;

            //Covid-19 Data for Australia

            document.getElementById('aus_new_cases').innerHTML = actualdata.Countries[9].NewConfirmed;
            document.getElementById('aus_new_deaths').innerHTML = actualdata.Countries[9].NewDeaths;
            document.getElementById('aus_tot_cases').innerHTML = actualdata.Countries[9].TotalConfirmed;

          //Covid Data for Japan
          document.getElementById('jap_new_cases').innerHTML = actualdata.Countries[85].NewConfirmed;
          document.getElementById('jap_new_deaths').innerHTML = actualdata.Countries[85].NewDeaths;
        document.getElementById('jap_tot_cases').innerHTML = actualdata.Countries[85].TotalConfirmed;
     
             

    }

    
  };
  xhttp.open("GET", "https://api.covid19api.com/summary", true); //Creating the request using GET request, Retrive data from URL,

  xhttp.send(); // Sending the request
}

loadDoc();
