function PERFORM() {
 
  var inputVal = document.getElementById("urls").value;

var url = "https://lesotho-orphanages.vercel.app/"+inputVal;

  

fetch(url).then((response) => {


    if(response){

        hideloader();
    
    }

    return response.json();

    
    
    }).then(function(data) {

   appendData(data);

    }).catch(function (err) {
        
    console.log("Error: " + err);


    });

  

function appendData(data) {

   let count = 0;
  
 for(let  x in data){


   let information = `<div class="skill-item wow fadeIn" style="text-align:center;  margin-top:40px;">
   <h2 style="color:white;">Information About ${data.name} Available includes:</h2>
   <br>
   <br>
    <img src="${data.image}" style="border: 2px solid #000; width:250px; height: 250px; border-radius:50%; margin-left: 10px;">
    <br><br>
    <p style="margin-left: 10px; font-size:30px; color:white;"><b>The place found: ${data.location}</b></p>
   <br><br> <pre><p style="font-size:25px;"><b>Amount Donated: M${data.donated}.00</b>  <b style="color: white;">TARGETED DONATION: M${data.target}.00</b></p></pre>
    <br><br>
    
    </div>`;

    document.getElementById('info1').innerHTML = information;
    document.getElementById('info2').innerHTML = data.name;
    document.getElementById('info3').innerHTML = "M"+data.target+".00";
    document.getElementById('info4').innerHTML = "M"+data.donated+".00";
  

    }

  
    let date = new Date();

    let year = date.getFullYear();

    document.getElementById('date').innerHTML =year;
    

}


function hideloader(){

    document.getElementById('load').style.display = 'none';

}

}