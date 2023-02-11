$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:5501/api/country_data.json",
    type: "GET",
    success: function (result) {
      if (result != '') {
        console.log(result.data);
        const country_data = result.data;
        $.each(country_data,function (country_code,details){
          console.log(details.region);
          if(details.region==='Asia'){

            //console.log(details.country);
          }
          $("#country_id").append('<li><a class="dropdown-item" href="#">'+country_code+'</a></li>');
          $("#region_id").append('<li><a class="dropdown-item" href="#">'+details.region+'</a></li>')
          $("#country_name").append('<li><a class="dropdown-item" href="#">'+details.country+'</a></li>')
        });
      }

    }
  });
});
//find all the contries whihc is in asia
//show all region in the world
//display all code of country
//display all country name
//https://cors-anywhere.herokuapp.com/
//var country = [];
//country_data['IN']['country] ='India'; 
//country_data['IN']['region] ='Asia'; 

//var myarray = [];
// array[0] = array('name'=>'mayank',"mob"=>"dsfdf");
// array[1] = '';