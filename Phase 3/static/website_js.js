// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("myImages");
//console.log(images)
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var tmp = [];
var tmp2;
// // https://stackoverflow.com/questions/47798971/several-modal-images-on-page
// for (var i = 0; i < images.length; i++){
//     var img = images[i];
//     //sendData(img.alt);
//     img.onclick = function(evt){
//       //console.log(img.src)
//       sendData(img.alt);
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       //captionText.innerHTML = tmp2;
//     }
// }

var img = images[0];
img.onclick = function(evt){
  //console.log(img.src)
  getLore(img.alt);
  getChampionInfo(img.alt);
  getChampionStats(img.alt);
  getChampionAbilityInfo(img.alt);
  getChampionSkins(img.alt);
  getChampionRole(img.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp2;
}

var img2 = images[1];
img2.onclick = function(evt){
  getChampionInfo(img2.alt);
  getLore(img2.alt);
  getChampionStats(img2.alt);
  getChampionAbilityInfo(img2.alt);
  getChampionSkins(img2.alt);
  getChampionRole(img2.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img3 = images[2];
img3.onclick = function(evt){
  getChampionInfo(img3.alt);
  getLore(img3.alt);
  getChampionStats(img3.alt);
  getChampionAbilityInfo(img3.alt);
  getChampionSkins(img3.alt);
  getChampionRole(img3.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img4 = images[3];
img4.onclick = function(evt){
  getChampionInfo(img4.alt);
  getLore(img4.alt);
  getChampionStats(img4.alt);
  getChampionAbilityInfo(img4.alt);
  getChampionSkins(img4.alt);
  getChampionRole(img4.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img5 = images[4];
img5.onclick = function(evt){
  getChampionInfo(img5.alt);
  getLore(img5.alt);
  getChampionStats(img5.alt);
  getChampionAbilityInfo(img5.alt);
  getChampionSkins(img5.alt);
  getChampionRole(img5.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img6 = images[5];
img6.onclick = function(evt){
  getChampionInfo(img6.alt);
  getLore(img6.alt);
  getChampionStats(img6.alt);
  getChampionAbilityInfo(img6.alt);
  getChampionSkins(img6.alt);
  getChampionRole(img6.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img7 = images[6];
img7.onclick = function(evt){
  getChampionInfo(img7.alt);
  getLore(img7.alt);
  getChampionStats(img7.alt);
  getChampionAbilityInfo(img7.alt);
  getChampionSkins(img7.alt);
  getChampionRole(img7.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img8 = images[7];
img8.onclick = function(evt){
  getChampionInfo(img8.alt);
  getLore(img8.alt);
  getChampionStats(img8.alt);
  getChampionAbilityInfo(img8.alt);
  getChampionSkins(img8.alt);
  getChampionRole(img8.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img9 = images[8];
img9.onclick = function(evt){
  getChampionInfo(img9.alt);
  getLore(img9.alt);
  getChampionStats(img9.alt);
  getChampionAbilityInfo(img9.alt);
  getChampionSkins(img9.alt);
  getChampionRole(img9.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img10 = images[9];
img10.onclick = function(evt){
  getChampionInfo(img10.alt);
  getLore(img10.alt);
  getChampionStats(img10.alt);
  getChampionAbilityInfo(img10.alt);
  getChampionSkins(img10.alt);
  getChampionRole(img10.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img11 = images[10];
img11.onclick = function(evt){
  getChampionInfo(img11.alt);
  getLore(img11.alt);
  getChampionStats(img11.alt);
  getChampionAbilityInfo(img11.alt);
  getChampionSkins(img11.alt);
  getChampionRole(img11.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img12 = images[11];
img12.onclick = function(evt){
  getChampionInfo(img12.alt);
  getLore(img12.alt);
  getChampionStats(img12.alt);
  getChampionAbilityInfo(img12.alt);
  getChampionSkins(img12.alt);
  getChampionRole(img12.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img13 = images[12];
img13.onclick = function(evt){
  getChampionInfo(img13.alt);
  getLore(img13.alt);
  getChampionStats(img13.alt);
  getChampionAbilityInfo(img13.alt);
  getChampionSkins(img13.alt);
  getChampionRole(img13.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img14 = images[13];
img14.onclick = function(evt){
  getChampionInfo(img14.alt);
  getLore(img14.alt);
  getChampionStats(img14.alt);
  getChampionAbilityInfo(img14.alt);
  getChampionSkins(img14.alt);
  getChampionRole(img14.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img15 = images[14];
img15.onclick = function(evt){
  getChampionInfo(img15.alt);
  getLore(img15.alt);
  getChampionStats(img15.alt);
  getChampionAbilityInfo(img15.alt);
  getChampionSkins(img15.alt);
  getChampionRole(img15.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

var img16 = images[15];
img16.onclick = function(evt){
  getChampionInfo(img16.alt);
  getLore(img16.alt);
  getChampionStats(img16.alt);
  getChampionAbilityInfo(img16.alt);
  getChampionSkins(img16.alt);
  getChampionRole(img16.alt);
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = tmp[2];
}

function getLore(alt){
    //Storing the data that you will send as a json object
    const json_datav2 = {
      mode: "lore",
      alt: alt,
    };
  
    //initializing everything to make the api call this is using AJAX
    const xhttp = new XMLHttpRequest();
    const method = "POST";
    const url = "http://127.0.0.1:5000/user";
  
    const async = true;
    xhttp.open(method, url, async); //opens connection
    console.log(JSON.stringify(json_datav2));
    xhttp.send(JSON.stringify(json_datav2)); //sends data and turns json object to a regular json
  
   //#in a post you can return a msg, or data and the .onload can be use to see the data you are returning
    xhttp.onload = function () {
      //https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
      tmp = this.responseText;
      var mydata = JSON.parse(tmp);
      console.log(mydata[0].description)
      //console.log(this.responseText);
      console.log("made API call");
      captionText.innerHTML = mydata[0].description; //puts the string into the html file and says it is html code
    };
}

// #initizing a string with html code
// let text =
//   "<table id='students'><tr><th>Student Name</th><th>Grade</th></tr>";
// #formatting the given data into the html code 
// for (key in html) {
//   console.log(key);
//   text +=
//     "<tr><td name='name'>" +
//     html[key]["student_name"] +
//     "</td><td>" +
//     "<input type='text' name='grade_values' value=" +
//     html[key]["grade"] +
//     ">" +
//     "</td></tr>";
// }
// text += "</table>";
// console.log(text);
// document.getElementById("currentStudents").innerHTML = text; #puts the string into the html file and says it is html code

function getChampionInfo(alt){
  //Storing the data that you will send as a json object
  const json_datav2 = {
    mode: "champion",
    alt: alt,
  };

  //initializing everything to make the api call this is using AJAX
  const xhttp = new XMLHttpRequest();
  const method = "POST";
  const url = "http://127.0.0.1:5000/user";

  const async = true;
  xhttp.open(method, url, async); //opens connection
  console.log(JSON.stringify(json_datav2));
  xhttp.send(JSON.stringify(json_datav2)); //sends data and turns json object to a regular json

  //#in a post you can return a msg, or data and the .onload can be use to see the data you are returning
  xhttp.onload = function () {
    tmp = this.responseText
    console.log(tmp);
    //tmp.push(this.responseText)
    console.log("made API call")
    //document.getElementById("Champion").innerHTML = this.responseText;
    //https://www.w3schools.com/js/js_json_html.asp

      // var orderArrayHeader = ["Name","Price","Dmg Type"];
      // var thead = document.createElement('thead');

      // table.appendChild(thead);

      // for(var i=0;i<orderArrayHeader.length;i++){
      //     thead.appendChild(document.createElement("th")).
      //     appendChild(document.createTextNode(orderArrayHeader[i]));
      // }
      const myObj = JSON.parse(this.responseText);
      let text = "<table border='1'>"

      championList = ["Champion", "Price", "Dmg Type"];
      text += "<th>" + championList[0] + "</th>";
      text += "<th>" + championList[1] + "</th>";
      text += "<th>" + championList[2] + "</th>";
      for (let x in myObj) {
        console.log(myObj)
        text += "<tr><td>" + myObj[x].name + "</td>";
        text += "<td>" + myObj[x].price + "</td>";
        text += "<td>" + myObj[x].dmgType + "</td></tr>";
      }
      text += "</table>"    
      document.getElementById("demo1").innerHTML = text;
   
  };
}

function getChampionStats(alt){
  //Storing the data that you will send as a json object
  const json_datav2 = {
    mode: "championStats",
    alt: alt,
  };

  //initializing everything to make the api call this is using AJAX
  const xhttp = new XMLHttpRequest();
  const method = "POST";
  const url = "http://127.0.0.1:5000/user";

  const async = true;
  xhttp.open(method, url, async); //opens connection
  console.log(JSON.stringify(json_datav2));
  xhttp.send(JSON.stringify(json_datav2)); //sends data and turns json object to a regular json

  //#in a post you can return a msg, or data and the .onload can be use to see the data you are returning
  xhttp.onload = function () {
    tmp = this.responseText
    console.log(this.responseText);
    //tmp.push(this.responseText)
    console.log("made API call")
    //document.getElementById("Champion").innerHTML = this.responseText;
    //https://www.w3schools.com/js/js_json_html.asp
      const myObj = JSON.parse(this.responseText);
      let text = "<table border='1'>"

      championList = ["hp" ,  "resource",  "healthregen" ,  "manaregen" , " armor" ,  "atkdmg" ,  "magicresist" ,  "critdmg" , "movespeed",  "attackrange" ,
        "baseas" ,  "atkwindup" ," bonusas" ,  "gameplayradius" ,  "selectionradius" ,  "pathingradius" ,  "acqradius"];
      text += "<th>" + championList[0] + "</th>";
      text += "<th>" + championList[1] + "</th>";
      text += "<th>" + championList[2] + "</th>";
      text += "<th>" + championList[3] + "</th>";
      text += "<th>" + championList[4] + "</th>";
      text += "<th>" + championList[5] + "</th>";
      text += "<th>" + championList[6] + "</th>";
      text += "<th>" + championList[7] + "</th>";
      text += "<th>" + championList[8] + "</th>";
      text += "<th>" + championList[9] + "</th>";
      text += "<th>" + championList[10] + "</th>";
      text += "<th>" + championList[11] + "</th>";
      text += "<th>" + championList[12] + "</th>";
      text += "<th>" + championList[13] + "</th>";
      text += "<th>" + championList[14] + "</th>";
      text += "<th>" + championList[15] + "</th>";
      text += "<th>" + championList[16] + "</th>";
      for (let x in myObj) {
        console.log(myObj)
        text += "<tr><td>" + myObj[x].hp + "</td>";
        text += "<td>" + myObj[x].resource + "</td>";
        text += "<td>" + myObj[x].healthregen + "</td>";
        text += "<td>" + myObj[x].manaregen + "</td>";
        text += "<td>" + myObj[x].armor + "</td>";
        text += "<td>" + myObj[x].atkdmg + "</td>";
        text += "<td>" + myObj[x].magicresist + "</td>";
        text += "<td>" + myObj[x].critdmg + "</td>";
        text += "<td>" + myObj[x].movespeed + "</td>";
        text += "<td>" + myObj[x].attackrange + "</td>";
        text += "<td>" + myObj[x].baseas + "</td>";
        text += "<td>" + myObj[x].atkwindup + "</td>";
        text += "<td>" + myObj[x].bonusas + "</td>";
        text += "<td>" + myObj[x].gameplayradius + "</td>";
        text += "<td>" + myObj[x].selectionradius + "</td>";
        text += "<td>" + myObj[x].pathingradius + "</td>";
        text += "<td>" + myObj[x].acqradius + "</td></tr>";
        
      }
      text += "</table>"    
      document.getElementById("demo2").innerHTML = text;
  };
}

function getChampionAbilityInfo(alt){
  //Storing the data that you will send as a json object
  const json_datav2 = {
    mode: "abilityInfo",
    alt: alt,
  };

  //initializing everything to make the api call this is using AJAX
  const xhttp = new XMLHttpRequest();
  const method = "POST";
  const url = "http://127.0.0.1:5000/user";

  const async = true;
  xhttp.open(method, url, async); //opens connection
  console.log(JSON.stringify(json_datav2));
  xhttp.send(JSON.stringify(json_datav2)); //sends data and turns json object to a regular json

  //#in a post you can return a msg, or data and the .onload can be use to see the data you are returning
  xhttp.onload = function () {
    console.log(this.responseText);
    //tmp.push(this.responseText)
    console.log("made API call")
    //document.getElementById("AbilityInfo").innerHTML = this.responseText;

    const myObj = JSON.parse(this.responseText);
      let text = "<table border='1'>"
      championList = ["Passive", "Q", "W", "E", "R"];
      text += "<th>" + championList[0] + "</th>";
      text += "<th>" + championList[1] + "</th>";
      text += "<th>" + championList[2] + "</th>";
      text += "<th>" + championList[3] + "</th>";
      text += "<th>" + championList[4] + "</th>";
      for (let x in myObj) {
        console.log(myObj)
        text += "<tr><td>" + myObj[x].passive + "</td>";
        text += "<td>" + myObj[x].q + "</td>";
        text += "<td>" + myObj[x].w + "</td>";
        text += "<td>" + myObj[x].e + "</td>";
        text += "<td>" + myObj[x].r + "</td></tr>";
        
      }
      text += "</table>"    
      document.getElementById("demo3").innerHTML = text;
  };
}

function getChampionRole(alt){
  //Storing the data that you will send as a json object
  const json_datav2 = {
    mode: "role",
    alt: alt,
  };

  //initializing everything to make the api call this is using AJAX
  const xhttp = new XMLHttpRequest();
  const method = "POST";
  const url = "http://127.0.0.1:5000/user";

  const async = true;
  xhttp.open(method, url, async); //opens connection
  console.log(JSON.stringify(json_datav2));
  xhttp.send(JSON.stringify(json_datav2)); //sends data and turns json object to a regular json

  //#in a post you can return a msg, or data and the .onload can be use to see the data you are returning
  xhttp.onload = function () {
    console.log(this.responseText);
    //tmp.push(this.responseText)
    //document.getElementById("ChampionRole").innerHTML = this.responseText;

    const myObj = JSON.parse(this.responseText);
      let text = "<table border='1'>"
      championList = ["Name"];
      text += "<th>" + championList[0] + "</th>";
      for (let x in myObj) {
        console.log(myObj)
        text += "<tr><td>" + myObj[x].name + "</td></tr>";
        
      }
      text += "</table>"    
      document.getElementById("demo4").innerHTML = text;
  };
}

function getChampionSkins(alt){
  //Storing the data that you will send as a json object
  const json_datav2 = {
    mode: "championSkins",
    alt: alt,
  };

  //initializing everything to make the api call this is using AJAX
  const xhttp = new XMLHttpRequest();
  const method = "POST";
  const url = "http://127.0.0.1:5000/user";

  const async = true;
  xhttp.open(method, url, async); //opens connection
  console.log(JSON.stringify(json_datav2));
  xhttp.send(JSON.stringify(json_datav2)); //sends data and turns json object to a regular json

  //#in a post you can return a msg, or data and the .onload can be use to see the data you are returning
  xhttp.onload = function () {
    console.log(this.responseText);
    //tmp.push(this.responseText)
    //tmp2 = this.responseText
    //document.getElementById("ChampionSkins").innerHTML = this.responseText;

    const myObj = JSON.parse(this.responseText);
      let text = "<table border='1'>"
      championList = ["Name", "Price", "Chroma", "Prestige Edition"];
      text += "<th>" + championList[0] + "</th>";
      text += "<th>" + championList[1] + "</th>";
      text += "<th>" + championList[2] + "</th>";
      text += "<th>" + championList[3] + "</th>";
      for (let x in myObj) {
        console.log(myObj)
        text += "<tr><td>" + myObj[x].name + "</td>";
        text += "<td>" + myObj[x].price + "</td>";
        text += "<td>" + myObj[x].chroma + "</td>";
        text += "<td>" + myObj[x].prestige_edition + "</td></tr>";
        
      }
      text += "</table>"    
      document.getElementById("demo5").innerHTML = text;

    
  };
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Table for popup window
// https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
