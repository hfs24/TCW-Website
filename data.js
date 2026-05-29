
///////// ///////////////////////////////////////ADMINISTRATION

window.addEventListener('load', getStates);
window.addEventListener('load', getStates2);

window.addEventListener('load', getValues);
window.addEventListener("load", function(){ document.getElementById('admi').style.display='none'});

function getStates(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = JSON.parse(this.responseText);
for (i in myObj.gpios){
var output = myObj.gpios[i].output;
var state = myObj.gpios[i].state;
var collection = document.getElementsByClassName("desab"); 
var collection1 = document.getElementsByClassName("desab1");
var collection2 = document.getElementsByClassName("desab2");

// outputs we use in home but not in index
if(output=='40'||output=='41'||output=='43'||output=='44'||output=='45'||output=='47'||output=='60'||output=='61'||output=='46'||output=='48') {continue;}
// show Current TCW Date and Time text
if(output=='50'||output=='51'){
  document.getElementById(output).innerHTML = state;
  }

if (state == "1") {
document.getElementById(output).checked = true;
// activate sta
if(output=='16'){
for (let i = 0; i < collection.length; i++) {
 collection[i].disabled = false; //enable all inputs
 }
 document.getElementById('slid').style.display='none';
 document.getElementById('27').disabled = false; //enable cloud connection 1
 document.getElementById('272').disabled = false; //enable cloud connection 3
 
 document.getElementById('21').disabled = false; //enable nat
 document.getElementById('actv1').style.display='none';
 document.getElementById('actv10').style.display='none';
 

}


// activate ap
if(output=='17'){
for (let i = 0; i < collection1.length; i++) {
 collection1[i].disabled = false; //enable all inputs
 }
 document.getElementById('20').disabled = false;
 document.getElementById('actv2').style.display='none';
 document.getElementById('actv20').style.display='none';
}
//activate ethernet
if(output=='18'){
for (let i = 0; i < collection2.length; i++) {
 collection2[i].disabled = false;
 }
 document.getElementById('19').disabled = false;
 document.getElementById('actv3').style.display='none';
 document.getElementById('27').disabled = false;
 document.getElementById('272').disabled = false;

}



// if cloud conn 1 is on then cloud conn 2 is off
if(output=='27'){
 document.getElementById('272').disabled = true;
}

if(output=='33'){
  document.getElementById('3').disabled= false;
  document.getElementById('2').disabled= false;
  
  document.getElementById('actv8').style.display='none';
  document.getElementById('actv9').style.display='none';
  
  }
  
  
  
  if(output=='34'){
  document.getElementById('32').disabled= false;
  document.getElementById('22').disabled= false;
  
  document.getElementById('actv4').style.display='none';
  document.getElementById('actv5').style.display='none';
  
  }



// shpw Recipient Email in collab wheb buttons qre checked
if(output=='143'){
  
    document.getElementById('recip1').style.display='block';
   
   }

if(output=='144'){
  
    document.getElementById('recip1').style.display='block';
   
   }

if(output=='145'){
   
     document.getElementById('recip2').style.display='block';
    
    }
    if(output=='146'){
   
      document.getElementById('recip2').style.display='block';
     
     }



}

else {
document.getElementById(output).checked = false;
if(output=='16'){
for (let i = 0; i < collection.length; i++) {
 collection[i].disabled = true;
 }
 document.getElementById('slid').style.display='block';
 document.getElementById('27').disabled = true;
 document.getElementById('272').disabled = true;
 document.getElementById('21').disabled = true;
 document.getElementById('actv1').style.display='block';
 document.getElementById('actv10').style.display='block';

}

if(output=='17'){
for (let i = 0; i < collection1.length; i++) {
 collection1[i].disabled = true;
 }
 document.getElementById('20').disabled = true; 
 document.getElementById('actv2').style.display='block';
 document.getElementById('actv20').style.display='block';

}


if(output=='18'){
for (let i = 0; i < collection2.length; i++) {
 collection2[i].disabled = true;
 }
 document.getElementById('19').disabled = true;
 document.getElementById('actv3').style.display='block';
 document.getElementById('27').disabled = true;
 document.getElementById('272').disabled = true;

}
if(output=='27'){

 document.getElementById('272').disabled = false;

}



if(output=='146'){
  
  document.getElementById('recip2').style.display='none';
 
 }
 if(output=='143'){
 
   document.getElementById('recip1').style.display='none';
  
  }

  if(output=='144'){
  
    document.getElementById('recip1').style.display='none';
   
   }
   if(output=='145'){
   
     document.getElementById('recip2').style.display='none';
    
    }

    if(output=='33'){
      document.getElementById('3').disabled= true;
      document.getElementById('2').disabled= true;
      
      document.getElementById('actv8').style.display='block';
      document.getElementById('actv9').style.display='block';
      }
      if(output=='34'){
      document.getElementById('32').disabled= true;
      document.getElementById('22').disabled= true;
      
      document.getElementById('actv4').style.display='block';
      document.getElementById('actv5').style.display='block';
      } 

}
}
}
};
xhr.open("GET", "/state", true);
xhr.send();
}

// for installed firmware and latest available firmware values
function getStates2(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  var myObj = JSON.parse(this.responseText);
  for (i in myObj.gpios){
  var output = myObj.gpios[i].output;
  var state = myObj.gpios[i].state;
  if(output=='54'||output=='53'){
    document.getElementById(output).innerHTML = state;
    }
  }
  }
  };
  xhr.open("GET", "/state2", true);
  xhr.send();
  }

//Enable Collaboration
function toggleCheckbox (element) {
 var xhr = new XMLHttpRequest();
 if (element.checked) {
 xhr.open("GET", "/updatescollab?output="+element.id+"&state=1", true);
 document.getElementById('32').checked=false;

}
 else {
 xhr.open("GET", "/updatescollab?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }
//Automatic Email session log sending1
 function toggleCheckbox0 (element) {
  var xhr = new XMLHttpRequest();
  if (element.checked) {
  xhr.open("GET", "/oksendlog?output="+element.id+"&state=1", true);
document.getElementById('recip1').style.display='block';

   
  }
  else {
  xhr.open("GET", "/oksendlog?output="+element.id+"&state=0", true);
document.getElementById('recip1').style.display='none';


  }
  xhr.send();
  }
//Enable Email Notifications 1
function toggleCheckbox5 (element) {
    var xhr = new XMLHttpRequest();
    if (element.checked) {
    xhr.open("GET", "/oknotify?output="+element.id+"&state=1", true);
document.getElementById('recip1').style.display='block';

     
    }
    else {
    xhr.open("GET", "/oknotify?output="+element.id+"&state=0", true);
document.getElementById('recip1').style.display='none';

  
    }
    xhr.send();
    }
//Automatic Email session log sending2
function toggleCheckbox00 (element) {
      var xhr = new XMLHttpRequest();
      if (element.checked) {
      xhr.open("GET", "/oksendlog2?output="+element.id+"&state=1", true);
document.getElementById('recip2').style.display='block';

       
      }
      else {
      xhr.open("GET", "/oksendlog2?output="+element.id+"&state=0", true);
document.getElementById('recip2').style.display='none';

    
      }
      xhr.send();
      }
//Enable Email Notifications 3
function toggleCheckbox55 (element) {
        var xhr = new XMLHttpRequest();
        if (element.checked) {
        xhr.open("GET", "/oknotify2?output="+element.id+"&state=1", true);
document.getElementById('recip2').style.display='block';

         
        }
        else {
        xhr.open("GET", "/oknotify2?output="+element.id+"&state=0", true);
document.getElementById('recip2').style.display='none';

      
        }
        xhr.send();
        }


 function toggleCheckbox1 (element) {
 var xhr = new XMLHttpRequest();
 if (element.checked) {
 xhr.open("GET", "/updatesadm?output="+element.id+"&state=1", true);
 document.getElementById('22').checked=false;
 }
 else {
 xhr.open("GET", "/updatesadm?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }

 function toggleCheckbox3 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updateslogging?output="+element.id+"&state=1", true);
document.getElementById('52').checked=false;
 
}
else {
xhr.open("GET", "/updateslogging?output="+element.id+"&state=0", true);
 
}
xhr.send();
}


 function toggleCheckbox4 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updateslogging2?output="+element.id+"&state=1", true);

document.getElementById('5').checked=false;

}
else {
xhr.open("GET", "/updateslogging2?output="+element.id+"&state=0", true);

}
xhr.send();
}

 function toggleCheckbox7 (element) {
 var xhr = new XMLHttpRequest();
 if (element.checked) {
 xhr.open("GET", "/updatescollab2?output="+element.id+"&state=1", true);
 document.getElementById('3').checked=false;


 }
 else {
 xhr.open("GET", "/updatescollab2?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }

function toggleCheckbox8 (element) {
 var xhr = new XMLHttpRequest();
 if (element.checked) {
 xhr.open("GET", "/updatesadm2?output="+element.id+"&state=1", true);
 document.getElementById('2').checked=false;

}
 else {
 xhr.open("GET", "/updatesadm2?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }

 function toggleCheckbox13 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatehidden?output="+element.id+"&state=1", true);
}
else {
xhr.open("GET", "/updatehidden?output="+element.id+"&state=0", true);
}
xhr.send();
} 

function toggleCheckbox14 (element) {

var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatedhcp?output="+element.id+"&state=1", true);
document.getElementById("ip").disabled = true;
document.getElementById("netmask").disabled = true;
document.getElementById("gtway").disabled = true;
}
else {
xhr.open("GET", "/updatedhcp?output="+element.id+"&state=0", true);
document.getElementById("ip").disabled = false;
document.getElementById("netmask").disabled = false;
document.getElementById("gtway").disabled = false;
}
xhr.send();
}

function toggleCheckbox15 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesnatsta?output="+element.id+"&state=1", true);
}
else {
xhr.open("GET", "/updatesnatsta?output="+element.id+"&state=0", true);
}
xhr.send();
}

 function toggleCheckbox16 (element) {
 var xhr = new XMLHttpRequest();
 if (element.checked) {
 xhr.open("GET", "/updatesnatap?output="+element.id+"&state=1", true);
 }
 else {
 xhr.open("GET", "/updatesnatap?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }

 function toggleCheckbox17 (element) {
 var xhr = new XMLHttpRequest();
 if (element.checked) {
 xhr.open("GET", "/updatesnatethernet?output="+element.id+"&state=1", true);
 }
 else {
 xhr.open("GET", "/updatesnatethernet?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }

 function toggleCheckbox18 (element) {
 var xhr = new XMLHttpRequest();
 var collection = document.getElementsByClassName("desab");
 if (element.checked) {

 xhr.open("GET", "/updatesactivatesta?output="+element.id+"&state=1", true);


 for (let i = 0; i < collection.length; i++) {
collection[i].disabled = false;
}

document.getElementById('slid').style.display='none';
document.getElementById('slid0').style.display='none';
document.getElementById('21').disabled = false;
document.getElementById('actv1').style.display='none';
document.getElementById('actv10').style.display='none';
document.getElementById('27').disabled = false;
document.getElementById('272').disabled = false;

}
 else {
 xhr.open("GET", "/updatesactivatesta?output="+element.id+"&state=0", true);
 for (let i = 0; i < collection.length; i++) {
collection[i].disabled = true;
}

document.getElementById('slid').style.display='block';
document.getElementById('slid0').style.display='block';
 
document.getElementById('21').disabled = true;
document.getElementById('actv1').style.display='block';
document.getElementById('actv10').style.display='block';
document.getElementById('27').disabled = true;
document.getElementById('272').disabled = true;



 }
 xhr.send();
 }

 function toggleCheckbox19 (element) {
var xhr = new XMLHttpRequest();
 var collection = document.getElementsByClassName("desab1");

 if (element.checked) {
 xhr.open("GET", "/updatesactivateap?output="+element.id+"&state=1", true);
 for (let i = 0; i < collection.length; i++) {
 collection[i].disabled = false;
 }
document.getElementById('slid1').style.display='none';
 document.getElementById('slid2').style.display='none';

 document.getElementById('20').disabled = false;
 document.getElementById('actv2').style.display='none';
 document.getElementById('actv20').style.display='none';

}
 else {
 xhr.open("GET", "/updatesactivateap?output="+element.id+"&state=0", true);

 for (let i = 0; i < collection.length; i++) {
 collection[i].disabled = true;
 }
document.getElementById('slid1').style.display='block';
 document.getElementById('slid2').style.display='block';
 document.getElementById('20').disabled = true;

document.getElementById('actv2').style.display='block';
document.getElementById('actv20').style.display='block';


 }
 xhr.send();
 }
 
 function toggleCheckbox20 (element) {
 var xhr = new XMLHttpRequest();
 var collection = document.getElementsByClassName("desab2");


 if (element.checked) {
 xhr.open("GET", "/updatesactivateethernet?output="+element.id+"&state=1", true);
 for (let i = 0; i < collection.length; i++) {
 collection[i].disabled = false;
 }
 document.getElementById('slid3').style.display='none';
 document.getElementById('19').disabled = false;
 document.getElementById('actv3').style.display='none';
 document.getElementById('27').disabled = false;
 document.getElementById('272').disabled = false;

}
 else {
 xhr.open("GET", "/updatesactivateethernet?output="+element.id+"&state=0", true);

 for (let i = 0; i < collection.length; i++) {
 collection[i].disabled = true;
 }
 document.getElementById('slid3').style.display='block';
 document.getElementById('19').disabled = true;
 document.getElementById('actv3').style.display='block';
 document.getElementById('27').disabled = true;
 document.getElementById('272').disabled = true;

}
 xhr.send();
 }

 function toggleCheckbox21 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatemoduleactiv?output="+element.id+"&state=1", true);
document.getElementById('272').disabled = true;

}
else {
xhr.open("GET", "/updatemoduleactiv?output="+element.id+"&state=0", true);

 document.getElementById('272').disabled = false;
 document.getElementById('3').checked= false;
 document.getElementById('2').checked= false;
}
xhr.send();
}


function toggleCheckbox24 (element) {
  var xhr = new XMLHttpRequest();
  if (element.checked) {
  xhr.open("GET", "/autoconfsave?output="+element.id+"&state=1", true);
  }
  else {
  xhr.open("GET", "/autoconfsave?output="+element.id+"&state=0", true);
  }
  xhr.send();
  }

  function toggleCheckbox25 (element) {
    var xhr = new XMLHttpRequest();
    if (element.checked) {
    xhr.open("GET", "/onsynchro?output="+element.id+"&state=1", true);
    }
    else {
    xhr.open("GET", "/onsynchro?output="+element.id+"&state=0", true);
    }
    xhr.send();
    }
    
    function toggleCheckbox26 (element) {
      var xhr = new XMLHttpRequest();
      if (element.checked) {
      xhr.open("GET", "/defmodconn?output="+element.id+"&state=1", true);
      }
      else {
      xhr.open("GET", "/defmodconn?output="+element.id+"&state=0", true);
      }
      xhr.send();
      }
      function toggleCheckbox27 (element) {
        var xhr = new XMLHttpRequest();
        if (element.checked) {
        xhr.open("GET", "/securewebcomm?output="+element.id+"&state=1", true);
        }
        else {
        xhr.open("GET", "/securewebcomm?output="+element.id+"&state=0", true);
        }
        xhr.send();
        }
      
  


function toggleCheckbox22 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatemoduleactiv2?output="+element.id+"&state=1", true);

}
else {
xhr.open("GET", "/updatemoduleactiv2?output="+element.id+"&state=0", true);

 document.getElementById('32').checked= false;
 document.getElementById('22').checked= false;
}
xhr.send();
}

function logoutButton() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/logout", true);
  xhr.send();
  setTimeout(function(){ window.open("/logged-out","_self"); }, 1000);
 }


document.getElementById('actv1').onclick= function (){alert('Please Activate Station First')}
document.getElementById('actv10').onclick= function (){alert('Please Activate Station First')}
document.getElementById('actv2').onclick= function (){alert('Please Activate Acces Point First')}
document.getElementById('actv20').onclick= function (){alert('Please Activate Acces Point First')}
document.getElementById('actv3').onclick= function (){alert('Please Activate Ethernet First')}
document.getElementById('actv4').onclick= function (){alert('Please Connect This Port To Cloud First')}
document.getElementById('actv5').onclick= function (){alert('Please Connect This Port To Cloud First')}
document.getElementById('actv8').onclick= function (){alert('Please Connect This Port To Cloud First')}
document.getElementById('actv9').onclick= function (){alert('Please Connect This Port To Cloud First')}




function showgmt () {
const targ = document.getElementById("datetext");
const targ1 = document.getElementById("info");
const targ2 = document.getElementById("info2");
if (targ.style.display == "none") {
setTimeout(function(){ 
targ.style.display='block';
targ1.style.display='block';
targ2.style.display='block';
}, 2000);

}
else {
 targ.style.display = "none";
 targ1.style.display = "none";
 targ2.style.display = "none";
}


}

function showpubkey () {
  const targ = document.getElementById("datetext4");
  const targ1 = document.getElementById("info4");
  if (targ.style.display == "none") {
  setTimeout(function(){ 
  targ.style.display='block';
  targ1.style.display='block';
  document.getElementById("updttop").style.marginTop = '-28.4%';


  }, 2000);
  
  }
  else {
   targ.style.display = "none";
   targ1.style.display = "none";
  document.getElementById("updttop").style.marginTop = '-26.4%';

  }

  }

  function showpubkey2 () {
    const targ = document.getElementById("datetext44");
    const targ1 = document.getElementById("info44");
    if (targ.style.display == "none") {
    setTimeout(function(){ 
    targ.style.display='block';
    targ1.style.display='block';
    document.getElementById("updttop2").style.marginTop = '-28.4%';

  
  
    }, 2000);
    
    }
    else {
     targ.style.display = "none";
     targ1.style.display = "none";
  document.getElementById("updttop2").style.marginTop = '-26.4%';
  
    }
  
    }

function reloadpage(){
window.location.reload();
}

window.onload=function() {

const d = new Date();
document.getElementById("demo").innerHTML = d.toLocaleString("en-gb", {
day: "numeric",
month: "short",
year: "numeric",
hour: "numeric",
minute: "2-digit"
});

if (window.location.hash== "#wirelesssta") {
 document.getElementById('textwirelesssta').style.display = "block";
 document.getElementById('wrsta').style.backgroundColor = "rgb(34, 109, 196)";
 document.getElementById('net1').style.backgroundColor = "rgb(34, 109, 196)";



}

if (window.location.hash== "#wirelessap") {
document.getElementById('textwirelessap').style.display = "block";
document.getElementById('wrlap').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net1').style.backgroundColor = "rgb(34, 109, 196)";


 }

if (window.location.hash=="#Network") {
 document.getElementById('textnetwork').style.display = "block";
 document.getElementById('net').style.backgroundColor = "rgb(34, 109, 196)";
 document.getElementById('net1').style.backgroundColor = "rgb(34, 109, 196)";


}


if (window.location.hash=="#sshset2") {
 document.getElementById('textssh2').style.display = "block";

 document.getElementById('srl2').style.backgroundColor = "rgb(34, 109, 196)";
 document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
 document.getElementById('act1').style.backgroundColor = "rgb(34, 109, 196)";

 


 }

 if (window.location.hash=="#sshset") {
document.getElementById('textssh').style.display = "block";

document.getElementById('srl1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act2').style.backgroundColor = "rgb(34, 109, 196)";





}

if (window.location.hash=="#serialset") {
document.getElementById('textserset').style.display = "block";
 
document.getElementById('srl1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act3').style.backgroundColor = "rgb(34, 109, 196)";



}

if (window.location.hash=="#collabset") {
document.getElementById('textcollab').style.display = "block";

document.getElementById('srl1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act4').style.backgroundColor = "rgb(34, 109, 196)";




}

 if (window.location.hash=="#collabset2") {
document.getElementById('textcollab2').style.display = "block";

document.getElementById('srl2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act5').style.backgroundColor = "rgb(34, 109, 196)";



}

if (window.location.hash=="#serialset2") {
document.getElementById('textserset2').style.display = "block";
document.getElementById('srl2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act6').style.backgroundColor = "rgb(34, 109, 196)";


}

 
if (window.location.hash=="#Administration") {
 document.getElementById('textadmin').style.display = "block";
 document.getElementById('adm').style.backgroundColor = "rgb(34, 109, 196)";
}

if (window.location.hash=="#firmware") {
 document.getElementById('textfirm').style.display = "block";
 document.getElementById('fir').style.backgroundColor = "rgb(34, 109, 196)";

} 

if (window.location.hash=="#Help") {
document.getElementById('texthelp').style.display = "block";
document.getElementById('hl').style.backgroundColor = "rgb(34, 109, 196)";
}



}

function showwirelesssta() {
document.getElementById('textwirelesssta').style.display = "block";
document.getElementById('net1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('wrsta').style.backgroundColor = "rgb(34, 109, 196)";
var collection = document.getElementsByClassName("wst");
var collection2 = document.getElementsByClassName("wstt");


for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}

for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}


 }

 function showwirelessap() {
 document.getElementById('textwirelessap').style.display = "block";
document.getElementById('wrlap').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net1').style.backgroundColor = "rgb(34, 109, 196)";
var collection = document.getElementsByClassName("wst1");
var collection2 = document.getElementsByClassName("wstt1");

for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}

for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}

}

 function shownetwork() {
 document.getElementById('textnetwork').style.display = "block";

document.getElementById('net').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net1').style.backgroundColor = "rgb(34, 109, 196)";
var collection = document.getElementsByClassName("wst2");
var collection2 = document.getElementsByClassName("wstt2");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}

for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}



 }

 function showsshset2() {
 document.getElementById('textssh2').style.display = "block";

document.getElementById('srl2').style.backgroundColor = "rgb(34, 109, 196)";
 document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
 document.getElementById('act1').style.backgroundColor = "rgb(34, 109, 196)";
 var collection = document.getElementsByClassName("wst3");
 var collection2 = document.getElementsByClassName("wstt3");
 for (let i = 0; i < collection.length; i++) {
 collection[i].style.backgroundColor = "rgb(9, 30, 49)"
 }

 for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}


}

 function showsshset() {
document.getElementById('textssh').style.display = "block";

document.getElementById('srl1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act2').style.backgroundColor = "rgb(34, 109, 196)";
var collection = document.getElementsByClassName("wst4");
var collection2 = document.getElementsByClassName("wstt4");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}

for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}


}

 function showcollab2() {
 document.getElementById('textcollab2').style.display = "block";

document.getElementById('srl2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act5').style.backgroundColor = "rgb(34, 109, 196)";

var collection = document.getElementsByClassName("wst5");
var collection2 = document.getElementsByClassName("wstt5");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}

for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}
for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}



}

 function showadmin() {
document.getElementById('textadmin').style.display = "block";

document.getElementById('adm').style.backgroundColor = "rgb(34, 109, 196)";

 var collection = document.getElementsByClassName("wst6");
 var collection2 = document.getElementsByClassName("wstt6");
 for (let i = 0; i < collection.length; i++) {
 collection[i].style.backgroundColor = "rgb(9, 30, 49)"
 }
 for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}

 


 }

 function showfirmware() {
 document.getElementById('textfirm').style.display = "block";

document.getElementById('fir').style.backgroundColor = "rgb(34, 109, 196)";

var collection = document.getElementsByClassName("wst7");
var collection2 = document.getElementsByClassName("wstt7");

for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}
for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}

}

 function showhelp() {
 document.getElementById('texthelp').style.display = "block";
document.getElementById('hl').style.backgroundColor = "rgb(34, 109, 166)";
var collection = document.getElementsByClassName("wst8");
var collection2 = document.getElementsByClassName("wstt8");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}
for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}
 



 }

 function showserset() {
 document.getElementById('textserset').style.display = "block";

document.getElementById('srl1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act3').style.backgroundColor = "rgb(34, 109, 196)";

var collection = document.getElementsByClassName("wst9");
var collection2 = document.getElementsByClassName("wstt9");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}
for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}

 



 }

 function showcollab() {
document.getElementById('textcollab').style.display="block";

document.getElementById('srl1').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act4').style.backgroundColor = "rgb(34, 109, 196)";

var collection = document.getElementsByClassName("wst10");
var collection2 = document.getElementsByClassName("wstt10");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}

for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}




 }

 function showserset2() {
 document.getElementById('textserset2').style.display = "block";

document.getElementById('srl2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('net2').style.backgroundColor = "rgb(34, 109, 196)";
document.getElementById('act6').style.backgroundColor = "rgb(34, 109, 196)";

var collection = document.getElementsByClassName("wst11");
var collection2 = document.getElementsByClassName("wstt11");
for (let i = 0; i < collection.length; i++) {
collection[i].style.backgroundColor = "rgb(9, 30, 49)"
}
for (let i = 0; i < collection.length; i++) {
collection2[i].style.display = "none";
}


 }


 document.getElementById("SshPort").addEventListener("change", function() {
  var selectedOption = this.value;
  alert("Changes will be applied after Reboot");
});

document.getElementById("SshPort2").addEventListener("change", function() {
  var selectedOption = this.value;
  alert("Changes will be applied after Reboot");
});

document.getElementById('importForm').addEventListener('submit', function(event) {
  var fileInput = document.getElementById('importconfig');
  if (fileInput.files.length === 0) {
      event.preventDefault();
      alert('Please choose a file to import.');
  }
});



function scanfunction () {
  document.getElementById("sec").style.display='block';
//let url = 'scan_wifi.html';
//window.open(url, "_blank", 'menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=650,width=500');
}

function lastlog(){
let url = 'logsshpage.html';

window.open(url,'_blank', 'menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=650,width=500');
}

function lastlog2(){
let url = 'logssh2page.html';

window.open(url,'_blank', 'menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=650,width=500');
}


  function ValidateEmail(){
  var email = document.getElementById("sendemail");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!email.value.match(mailformat))
   {alert("You have entered an invalid Email address!");
   return false;}
   else
   {return true;}
  
  
  }

// show bar when shrink 
function headercollaps() {
  var thi = document.getElementById('ici');

  if (thi.style.display === "none" || thi.style.display === "") {
    thi.style.display = "block";
    thi.style.width = '20%';
    thi.style.overflow = 'visible';
  } else {
    thi.style.display = "none";
  }
}

// show key
function showkey(){
let url = 'showkey.html';

window.open(url,'_blank', 'menubar=yes,location=yes,resizable=no,scrollbars=yes,status=no,height=650,width=500');

}


function fctalert() {
 alert('Changes will be applied after REBOOT');
  }

function scanrealfunction(element) {
var xhr = new XMLHttpRequest();
if (element) {
xhr.open("GET", "/updatescan?output="+element.id+"&state=1", true);
}
else {
xhr.open("GET", "/updatescan?output="+element.id+"&state=0", true);
}
xhr.send();
}

function showtime(element) {
 var xhr = new XMLHttpRequest();
 if (element) {
 xhr.open("GET", "/updategmt?output="+element.id+"&state=1", true);
 }
 else {
 xhr.open("GET", "/updategmt?output="+element.id+"&state=0", true);
 }
 xhr.send();
 }
  
// Function to get current readings on the webpage when it loads/refreshes
function getValues(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   var myObj = JSON.parse(this.responseText);
      //srial2
      document.getElementById("input1_serial2").value = myObj.serial2;
      document.getElementById("parity2").value = myObj.parity2;
      document.getElementById("stopbit2").value = myObj.stopbit2;
      document.getElementById("databit2").value = myObj.databit2;
      document.getElementById("flowctrl2").value = myObj.flowctrl2;
    
   
  document.getElementById("mailrecipient").value = myObj.mailrecipient;
  document.getElementById("mailrecipient2").value = myObj.mailrecipient;
  
   document.getElementById("sethost").value = myObj.sethost;
   document.getElementById("input1_gmt").value = myObj.input1_gmt;
   document.getElementById("defport").value = myObj.defport;
  document.getElementById("httpcert").value = myObj.httpcert;
  document.getElementById("smtphost").value = myObj.smtphost;
  document.getElementById("smtpport").value = myObj.smtpport;
  document.getElementById("authoremail").value = myObj.authoremail;
  
  
  //sta
  document.getElementById("input1_wifista").value = myObj.input1_wifista;
  document.getElementById("ip").value = myObj.ip;
  document.getElementById("netmask").value = myObj.netmask;
  document.getElementById("gtway").value = myObj.gtway;
  
  //ap
   document.getElementById("input1_wifiap").value = myObj.input1_wifiap;
   document.getElementById("input1_ipap").value = myObj.input1_ipap;
   document.getElementById("netmaskap").value = myObj.netmaskap;
   document.getElementById("gtwayap").value = myObj.gtwayap;
   document.getElementById("input1_maxwifichan").value = myObj.maxwifichan;
   document.getElementById("input1_maxwificon").value = myObj.maxwificon;
  
  //ethernet
  document.getElementById("23").value = myObj.ipethernet;
  document.getElementById("24").value = myObj.netmaskethernet;
  document.getElementById("25").value = myObj.gtwayethernet;
  document.getElementById("26").value = myObj.dnsethernet;
  
  document.getElementById("50").innerText = myObj.datezone;
  document.getElementById("51").innerText = myObj.timezone;
  document.getElementById("pubkeymod").innerText = myObj.pubkeymod;
  document.getElementById("pubkeymod2").innerText = myObj.pubkeymod;
  
  
  
  
  //ssh1
   document.getElementById("SshPort").value = myObj.SshPort;
   document.getElementById("sshtimeout").value = myObj.sshtimeout;
   document.getElementById("terminalmo").value = myObj.terminalmo;
   document.getElementById("hostaddress").value = myObj.hostaddress;
   document.getElementById("rmtsshport").value = myObj.rmtsshport;
  
   //ssh2
   document.getElementById("SshPort2").value = myObj.SshPort2;
   document.getElementById("sshtimeout2").value = myObj.sshtimeout2;
   document.getElementById("terminalmo2").value = myObj.terminalmo2;
   document.getElementById("hostaddress2").value = myObj.hostaddress2;
   document.getElementById("rmtsshport2").value = myObj.rmtsshport2;
  
    //srial1
    document.getElementById("input1_serial").value = myObj.serial;
    document.getElementById("parity").value = myObj.parity;
    document.getElementById("stopbit").value = myObj.stopbit;
    document.getElementById("databit").value = myObj.databit;
    document.getElementById("flowctrl").value = myObj.flowctrl;
  
  

    
    document.getElementById("sshuser").value = myObj.sshuser;
    document.getElementById("sshuser2").value = myObj.sshuser2;
  
    document.getElementById("46").value = myObj.hostid;
    document.getElementById("48").value = myObj.serialnum;

    if(myObj.securewebcomm == '1'){
      document.getElementById("12").checked = true;
    }
    else{
      document.getElementById("12").checked = false;

    }
      
   }
  }; 
  xhr.open("GET", "/values", true);
  xhr.send();
  }
  // scan wifi spin
   function timeleft () {
  document.getElementById('spin').style.display = "block";
  
  
  let progress4 = 0;
  let progress4incrementor = setInterval(() => {
   progress4+= 10;
   //$('#element4 .value').html(progress4 + '%');
   if (progress4 >= 100){ 
  clearInterval(progress4incrementor);
  
  setTimeout(function(){ 
  document.getElementById('spin').style.display = "none"; }, 500);
  
  }
  }, 1000);
  
  
  
  
  
  }
  
  function updpage () {
  fetch('defport.txt')
  .then(response => response.text())
  .then(data => {
  let url = 'http://tcwmanager.local:'+data+'/update';
  window.open(url,'_blank');
  });
  
  
  }

  function ValidateIPaddresssta() {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var hj5 = document.getElementById('ip');
    var hj3 = document.getElementById('gtway');
    var hj4 = document.getElementById('netmask');
    var stapass = document.getElementById('input2_passwordsta');
    var stapass1 = document.getElementById('input1_wifista');

    if (!(hj5.value.match(ipformat)) && (hj5.value.length > 0)) {
        alert("Invalid STA IP address!");
        return false;
    }

    if (!(hj3.value.match(ipformat)) && (hj3.value.length > 0)) {
        alert("Invalid STA Gateway address!");
        return false;
    }

    if (!(hj4.value.match(ipformat)) && (hj4.value.length > 0)) {
        alert("Invalid STA Netmask address!");
        return false;
    }

  /*   if (stapass.value.trim() === "") {
        alert("WiFi Station Password cannot be empty.");
        return false;
    } */

  /*   if (stapass1.value.trim() === "") {
        alert("WiFi Station SSID cannot be empty.");
        return false;
    } */

    if (stapass.value.trim() === "") {
      stapass.disabled = true;
      setTimeout(function () { stapass.disabled = false; }, 2000);
  }

  if (stapass1.value.trim() === "") {
    stapass1.disabled = true;
      setTimeout(function () { stapass1.disabled = false; }, 2000);
  }
    // If all validations passed, the function doesn't need to alert or log anything here
    return true;
}

function ValidateIPaddressap() {
  var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  var hj2 = document.getElementById('gtwayap');
  var hj1 = document.getElementById('netmaskap');
  var hj = document.getElementById('input1_ipap');
  var appass = document.getElementById('input1_wifiap');
  var appass1 = document.getElementById('input1_passwifiap');
  var appass2 = document.getElementById('input1_maxwifichan');
  var appass3 = document.getElementById('input1_maxwificon');
  var confirmPasswordField = document.getElementById('confirm_password_wifiap');
  var formValid = true; // Flag to track form validity

  // IP Address Validation
  if (!(hj.value.match(ipformat)) && (hj.value.length > 0)) {
      alert("Invalid AP IP address!");
      formValid = false;
  }

  // Netmask Validation
  if (!(hj1.value.match(ipformat)) && (hj1.value.length > 0)) {
      alert("Invalid AP Netmask address!");
      formValid = false;
  }

  // Gateway Validation
  if (!(hj2.value.match(ipformat)) && (hj2.value.length > 0)) {
      alert("Invalid AP Gateway address!");
      formValid = false;
  }



  
  if (appass1.value.length > 0) {
    if ((!(appass1.value.match(passwordRegex)))&& (appass1.value !== confirmPasswordField.value)) {
     alert("- Passwords do not match\n- Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
         return false; 
   } 
   if ((appass1.value.match(passwordRegex))&& (appass1.value !== confirmPasswordField.value)) {
     alert("- Passwords do not match");
         return false; 
   } 
   if ((!(appass1.value.match(passwordRegex)))&& (appass1.value === confirmPasswordField.value)) {
     alert("Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
         return false; 
   } 

    }


  // Temporary disabling of empty fields
  if (hj.value.trim() === "") {
      hj.disabled = true;
      setTimeout(function () { hj.disabled = false; }, 2000);
  }

  if (hj1.value.trim() === "") {
      hj1.disabled = true;
      setTimeout(function () { hj1.disabled = false; }, 2000);
  }

  if (hj2.value.trim() === "") {
      hj2.disabled = true;
      setTimeout(function () { hj2.disabled = false; }, 2000);
  }

  if (appass.value.trim() === "") {
      appass.disabled = true;
      setTimeout(function () { appass.disabled = false; }, 2000);
  }

  if (appass1.value.trim() === "") {
      appass1.disabled = true;
      setTimeout(function () { appass1.disabled = false; }, 2000);
  }

  if (appass2.value.trim() === "") {
      appass2.disabled = true;
      setTimeout(function () { appass2.disabled = false; }, 2000);
  }

  if (appass3.value.trim() === "") {
      appass3.disabled = true;
      setTimeout(function () { appass3.disabled = false; }, 2000);
  }

  if(formValid == false){
    return false;
  }

  if(formValid == true){
    window.location.reload();
  }
}


function ValidateIPaddressethernet()
{
var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var hj6= document.getElementById('23');
var hj7= document.getElementById('24');
var hj8= document.getElementById('25');
var hj9= document.getElementById('26');


if(!(hj6.value.match(ipformat))&&(hj6.value.length > 0)){alert("Invalid ETHERNET IP address!"); return false;}
 
if(!(hj7.value.match(ipformat))&&(hj7.value.length > 0)){alert("Invalid ETHERNET Netmask address!"); return false;}
 
if(!(hj8.value.match(ipformat))&&(hj8.value.length > 0)){alert("Invalid ETHERNET Getway address!"); return false;}

if(!(hj9.value.match(ipformat))&&(hj9.value.length > 0)){alert("Invalid ETHERNET DNS address!"); return false;}

  // Temporary disabling of empty fields
  if (hj6.value.trim() === "") {
    hj6.disabled = true;
    setTimeout(function () { hj6.disabled = false; }, 2000);
}

if (hj7.value.trim() === "") {
    hj7.disabled = true;
    setTimeout(function () { hj7.disabled = false; }, 2000);
}

if (hj8.value.trim() === "") {
    hj8.disabled = true;
    setTimeout(function () { hj8.disabled = false; }, 2000);
}
if (hj9.value.trim() === "") {
  hj9.disabled = true;
  setTimeout(function () { hj9.disabled = false; }, 2000);
}

} 

function Validateser1(){
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

var hj99= document.getElementById('sshuser');
var hj66= document.getElementById('sshpassword');

var hj77= document.getElementById('hostaddress');
var hj88= document.getElementById('input2_ssh');
var hj87= document.getElementById('rmtsshport');

var hj91= document.getElementById('SshPort');
var hj92= document.getElementById('sshtimeout');
var hj93= document.getElementById('terminalmo');
var confirmPasswordField = document.getElementById('confirm_input2_ssh');
var formValid = true;





if (hj88.value.length > 0) {
  if ((!(hj88.value.match(passwordRegex)))&& (hj88.value !== confirmPasswordField.value)) {
   alert("- Passwords do not match\n- Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
   formValid = false; 

 } 
 if ((hj88.value.match(passwordRegex))&& (hj88.value !== confirmPasswordField.value)) {
   alert("- Passwords do not match");
   formValid = false; 
 
 } 
 if ((!(hj88.value.match(passwordRegex)))&& (hj88.value === confirmPasswordField.value)) {
   alert("Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
   formValid = false; 

 } 

 if(formValid == false){
  return false;
}

if(formValid == true){
  window.location.reload();
}

  }

 if (hj99.value.trim() === "") {
  hj99.disabled = true;
  setTimeout(function () { hj99.disabled = false; }, 2000);
}
if (hj66.value.trim() === "") {
  hj66.disabled = true;
  setTimeout(function () { hj66.disabled = false; }, 2000);
}
if (hj77.value.trim() === "") {
  hj77.disabled = true;
  setTimeout(function () { hj77.disabled = false; }, 2000);
}
if (hj88.value.trim() === "") {
  hj88.disabled = true;
  setTimeout(function () { hj88.disabled = false; }, 2000);
}
if (hj87.value.trim() === "") {
  hj87.disabled = true;
  setTimeout(function () { hj87.disabled = false; }, 2000);
}
if (hj91.value.trim() === "") {
  hj91.disabled = true;
  setTimeout(function () { hj91.disabled = false; }, 2000);
}
if (hj92.value.trim() === "") {
  hj92.disabled = true;
  setTimeout(function () { hj92.disabled = false; }, 2000);
}
if (hj93.value.trim() === "") {
  hj93.disabled = true;
  setTimeout(function () { hj93.disabled = false; }, 2000);
}



} 
function Validateser13(){
 
  var hj99= document.getElementById('mailrecipient2');
  
   if (hj99.value.trim() === "") {
    hj99.disabled = true;
    setTimeout(function () { hj99.disabled = false; }, 2000);
  }

  
  } 

  function Validateser14(){
 
    var hj99= document.getElementById('mailrecipient');
    
     if (hj99.value.trim() === "") {
      hj99.disabled = true;
      setTimeout(function () { hj99.disabled = false; }, 2000);
    }

    
    } 
  
    function Validateser12(){
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
      
      var hj99= document.getElementById('sshuser2');
      var hj66= document.getElementById('sshpassword2');
      
      var hj77= document.getElementById('hostaddress2');
      var hj88= document.getElementById('input2S_ssh2');
      var hj87= document.getElementById('rmtsshport2');
      
      var hj91= document.getElementById('SshPort2');
      var hj92= document.getElementById('sshtimeout2');
      var hj93= document.getElementById('terminalmo2');
      var confirmPasswordField = document.getElementById('confirm_input2_ssh2');
      var formValid = true;


      
      
      
      if (hj88.value.length > 0) {
        if ((!(hj88.value.match(passwordRegex)))&& (hj88.value !== confirmPasswordField.value)) {
         alert("- Passwords do not match\n- Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
         formValid = false; 

       } 
       if ((hj88.value.match(passwordRegex))&& (hj88.value !== confirmPasswordField.value)) {
         alert("- Passwords do not match");
         formValid = false; 

       } 
       if ((!(hj88.value.match(passwordRegex)))&& (hj88.value === confirmPasswordField.value)) {
         alert("Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
         formValid = false; 

       } 

        }
      
      
       if (hj99.value.trim() === "") {
        hj99.disabled = true;
        setTimeout(function () { hj99.disabled = false; }, 2000);
      }
      if (hj66.value.trim() === "") {
        hj66.disabled = true;
        setTimeout(function () { hj66.disabled = false; }, 2000);
      }
      if (hj77.value.trim() === "") {
        hj77.disabled = true;
        setTimeout(function () { hj77.disabled = false; }, 2000);
      }
      if (hj88.value.trim() === "") {
        hj88.disabled = true;
        setTimeout(function () { hj88.disabled = false; }, 2000);
      }
      if (hj87.value.trim() === "") {
        hj87.disabled = true;
        setTimeout(function () { hj87.disabled = false; }, 2000);
      }
      if (hj91.value.trim() === "") {
        hj91.disabled = true;
        setTimeout(function () { hj91.disabled = false; }, 2000);
      }
      if (hj92.value.trim() === "") {
        hj92.disabled = true;
        setTimeout(function () { hj92.disabled = false; }, 2000);
      }
      if (hj93.value.trim() === "") {
        hj93.disabled = true;
        setTimeout(function () { hj93.disabled = false; }, 2000);
      }
      
      if(formValid == false){
        return false;
      }

      if(formValid == true){
        window.location.reload();
      }
      
      } 

      function Validateadmn(){
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
        var hj88= document.getElementById('input1_passweb');

        var hj99= document.getElementById('sethost');
        var hj66= document.getElementById('smtphost');
        
        var hj77= document.getElementById('smtpport');
        var hj87= document.getElementById('authoremail');
        
        var hj91= document.getElementById('authorpassword');
        var confirmPasswordField = document.getElementById('confirm_input1_passweb');
        var formValid = true;

        
        
      
        if (hj88.value.length > 0) {
          if ((!(hj88.value.match(passwordRegex)))&& (hj88.value !== confirmPasswordField.value)) {
           alert("- Passwords do not match\n- Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
           formValid = false; 
         } 
         if ((hj88.value.match(passwordRegex))&& (hj88.value !== confirmPasswordField.value)) {
           alert("- Passwords do not match");
           formValid = false; 
         } 
         if ((!(hj88.value.match(passwordRegex)))&& (hj88.value === confirmPasswordField.value)) {
           alert("Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
           formValid = false; 
         } 

          }
        
        
         if (hj99.value.trim() === "") {
          hj99.disabled = true;
          setTimeout(function () { hj99.disabled = false; }, 2000);
        }
        if (hj66.value.trim() === "") {
          hj66.disabled = true;
          setTimeout(function () { hj66.disabled = false; }, 2000);
        }
        if (hj77.value.trim() === "") {
          hj77.disabled = true;
          setTimeout(function () { hj77.disabled = false; }, 2000);
        }
        if (hj88.value.trim() === "") {
          hj88.disabled = true;
          setTimeout(function () { hj88.disabled = false; }, 2000);
        }
        if (hj87.value.trim() === "") {
          hj87.disabled = true;
          setTimeout(function () { hj87.disabled = false; }, 2000);
        }
        if (hj91.value.trim() === "") {
          hj91.disabled = true;
          setTimeout(function () { hj91.disabled = false; }, 2000);
        }

        if(formValid == false){
          return false;
        }

        if(formValid == true){
          window.location.reload();
        }
    
        
        
        } 

        function Validatefirmwar(){
          var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
          var hj88= document.getElementById('input1_passportal');
          var hj77= document.getElementById('httpcert');
          var confirmPasswordField = document.getElementById('confirm_input1_passportal');
          var formValid = true; // Flag to track form validity

       
        
       
           if (hj88.value.length > 0) {
           if ((!(hj88.value.match(passwordRegex)))&& (hj88.value !== confirmPasswordField.value)) {
            alert("- Passwords do not match\n- Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
            formValid = false;
          } 
          if ((hj88.value.match(passwordRegex))&& (hj88.value !== confirmPasswordField.value)) {
            alert("- Passwords do not match");
            formValid = false;
          } 
          if ((!(hj88.value.match(passwordRegex)))&& (hj88.value === confirmPasswordField.value)) {
            alert("Password must contain the following: Minimum 8 characters, Lowercase, Uppercase letter, a number, and a special character");
            formValid = false;
          } 

           }
        
   
          if (hj77.value.trim() === "") {
            hj77.disabled = true;
            setTimeout(function () { hj77.disabled = false; }, 2000);
          }
          if (hj88.value.trim() === "") {
            hj88.disabled = true;
            setTimeout(function () { hj88.disabled = false; }, 2000);
          }

          if(formValid == false){
            return false;
          }

          if(formValid == true){
            window.location.reload();
          }
    
          } 
  
// only two button activate
function functionn8() {
  var checkBoxsta = document.getElementById("21");
  var checkBoxap = document.getElementById("20");
  var checkBoxethern = document.getElementById("19");
  checkBoxsta.onclick = function () {
  if((checkBoxap.checked == true)&&(checkBoxethern.checked == true)){
  alert('Only 2 NAT Translation can be activated');
  return false;
  }
  if (checkBoxsta.checked == false){ alert('NAT has been deactivated on this interface.\nTo release memory resources, please schedule a reboot of your module.')}
  }
  checkBoxap.onclick = function () {
  if((checkBoxsta.checked == true)&&(checkBoxethern.checked == true)){
  alert('Only 2 NAT Translation can be activated');
  return false;}
  if (checkBoxap.checked == false){ alert('NAT has been deactivated on this interface.\nTo release memory resources, please schedule a reboot of your module.')}
  
  }
  checkBoxethern.onclick = function () {
  if((checkBoxsta.checked == true)&&(checkBoxap.checked == true)){
  alert('Only 2 NAT Translation can be activated');
  return false;
  }
  if (checkBoxethern.checked == false){ alert('NAT has been deactivated on this interface.\nTo release memory resources, please schedule a reboot of your module.')}
  
  }
  
  }

  function toggleVisibility(elementId, show) {
    const target = document.getElementById(elementId);
    target.style.display = show ? 'block' : 'none';
  }
  
  function hideElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }

  
  // Network Configuration
  function fcnet() {
    toggleVisibility('li1', true);
    toggleVisibility('li2', true);
    toggleVisibility('li3', true);
    hideElementsByClass('hid1'); //hide submenues
  }
  //Terminal Configuration
  function fcnet2() {
    toggleVisibility('li4', true);
    toggleVisibility('li5', true);
    hideElementsByClass('hid2'); //hide submenues
    hideElementsByClass('hid22');//hide submenues of serial 1 and 2
  }
  //administration
  function fcnet3() {
    hideElementsByClass('hid3'); //hide submenues
  }
  //Serial Port 1
  function fcnet4() {
    toggleVisibility('li8', true);
    toggleVisibility('li9', true);
    toggleVisibility('li10', true);
    hideElementsByClass('hid4'); //hide submenues
  }
  //Serial Port 2
  function fcnet5() {
    toggleVisibility('li11', true);
    toggleVisibility('li12', true);
    toggleVisibility('li13', true);
    hideElementsByClass('hid5'); //hide submenues
  }
  //help
  function fcnet6() {
  hideElementsByClass('hid6'); //hide submenues
}

function fcnet7() {
  hideElementsByClass('hid7'); //hide submenues
}

function alertsta() {
  var checkBoxsta = document.getElementById("16");
  if (checkBoxsta.checked == true){alert('Please Reboot To Activate Station Interface');}
  }
  
  function alertap() {
  var checkBoxap = document.getElementById("17");
  if (checkBoxap.checked == true){alert('Please Reboot To Activate Acces point Interface');}
  }
  
  function alertether() {
  var checkBoxethernet = document.getElementById("18");
  if (checkBoxethernet.checked == true){alert('Please Reboot To Activate Ethernet');}
  }
// show popup password ssh client mode in serial 1
function funlog()
{
 var ddl = document.getElementById("terminalmo");
 var selectedValue = ddl.value;

 if (selectedValue == "PEER2PEER")
{
 document.getElementById("popup").style.display = "block";
}
else{
 document.getElementById("popup").style.display = "none";

}

}
// show popup password ssh client mode in serial 2
function funlog2()
{
 var ddl2 = document.getElementById("terminalmo2");
 var selectedValue2 = ddl2.value;

 if (selectedValue2 == "PEER2PEER")
{
 document.getElementById("popup2").style.display = "block";
}

else{
 document.getElementById("popup2").style.display = "none";

}

}


function showpass1() {
  var col1 = document.getElementsByClassName("ab1");
  var col3 = document.getElementsByClassName("ur4");

  var x;
for (let i = 0; i < col1.length; i++) {
  
     if ( col1[i].type === "password") {
       col1[i].type = "text";
       x='1';
 }
  else {
   col1[i].type = "password";
   x='2';
     }
     }
for (let j = 0; j < col3.length; j++) {
 if ( x == "1") { col3[j].src = "noeye.png";}
 if ( x == "2") { col3[j].src = "ey.png";}
}
//............

 }
 function showpass2() {

  var col12 = document.getElementsByClassName("ab1adm2");
  var col13 = document.getElementById("uradm2");

  var r;

for (let i = 0; i < col12.length; i++) {
  
  if ( col12[i].type === "password") {
    col12[i].type = "text";
    r='1';
}
else {
col12[i].type = "password";
r='2';
  }
  }
 if ( r == "1") { col13.src = "noeye.png";}
 if ( r == "2") { col13.src = "ey.png";}
   
//.............
 }
 function showpass3() {

  var col10 = document.getElementsByClassName("ab1adm1");
  var col11 = document.getElementById("uradm1");

  var p;



for (let i = 0; i < col10.length; i++) {
  
  if ( col10[i].type === "password") {
    col10[i].type = "text";
    p='1';
}
else {
col10[i].type = "password";
p='2';
  }
  }
 if ( p == "1") { col11.src = "noeye.png";}
 if ( p == "2") { col11.src = "ey.png";}
   
//.............

 }
 function showpass4() {

  var col8 = document.getElementsByClassName("ab1ser2");
  var col9 = document.getElementById("urser2");
 
  var w;

//.............
for (let i = 0; i < col8.length; i++) {
  
  if ( col8[i].type === "password") {
    col8[i].type = "text";
    w='1';
}
else {
col8[i].type = "password";
w='2';
  }
  }
 if ( w == "1") { col9.src = "noeye.png";}
 if ( w == "2") { col9.src = "ey.png";}
   


 }
 function showpass5() {
  
  var col6 = document.getElementsByClassName("ab1ser1");
  var col7 = document.getElementById("ur3ser1");
  var z;
//...............
for (let i = 0; i < col6.length; i++) {
  
  if ( col6[i].type === "password") {
    col6[i].type = "text";
    z='1';
}
else {
col6[i].type = "password";
z='2';
  }
  }
 if ( z == "1") { col7.src = "noeye.png";}
 if ( z == "2") { col7.src = "ey.png";}
   
//.............

 }
 function showpass6() {
  var col4 = document.getElementsByClassName("ab1ap");
  var col5 = document.getElementById("ur2ap");

  var y;

//............
for (let i = 0; i < col4.length; i++) {
  
  if ( col4[i].type === "password") {
    col4[i].type = "text";
    y='1';
}
else {
col4[i].type = "password";
y='2';
  }
  }

if ( y == "1") { col5.src = "noeye.png";}
if ( y == "2") { col5.src = "ey.png";}

//...............

 }
 function showpass7() {

  var col10 = document.getElementsByClassName("ab1adm3");
  var col11 = document.getElementById("uradm3");

  var p;

for (let i = 0; i < col10.length; i++) {
  
  if ( col10[i].type === "password") {
    col10[i].type = "text";
    p='1';
}
else {
col10[i].type = "password";
p='2';
  }
  }
 if ( p == "1") { col11.src = "noeye.png";}
 if ( p == "2") { col11.src = "ey.png";}
   
//.............

 }


document.getElementById("confirm_password_wifiap").addEventListener("keyup", function() {
    var password = document.getElementById("input1_passwifiap").value;
    var confirmPassword = document.getElementById("confirm_password_wifiap").value;
    var message = document.getElementById("message");

    if (password === confirmPassword) {
      message.innerHTML = "";
        message.classList.remove("error");
    } else {
        message.innerHTML = "Passwords do not match";
        message.classList.add("error");
    }
});


document.getElementById("confirm_input1_passweb").addEventListener("keyup", function() {
  var password = document.getElementById("input1_passweb").value;
  var confirmPassword = document.getElementById("confirm_input1_passweb").value;
  var message = document.getElementById("message2");

  if (password === confirmPassword) {
    message.innerHTML = "";
      message.classList.remove("error");
  } else {
      message.innerHTML = "Passwords do not match";
      message.classList.add("error");
  }
});

document.getElementById("confirm_input1_passportal").addEventListener("keyup", function() {
  var password = document.getElementById("input1_passportal").value;
  var confirmPassword = document.getElementById("confirm_input1_passportal").value;
  var message = document.getElementById("message3");

  if (password === confirmPassword) {
    message.innerHTML = "";
      message.classList.remove("error");
  } else {
      message.innerHTML = "Passwords do not match";
      message.classList.add("error");
  }
});

document.getElementById("confirm_input2_ssh").addEventListener("keyup", function() {
  var password = document.getElementById("input2_ssh").value;
  var confirmPassword = document.getElementById("confirm_input2_ssh").value;
  var message = document.getElementById("message4");

  if (password === confirmPassword) {
    message.innerHTML = "";
      message.classList.remove("error");
  } else {
      message.innerHTML = "Passwords do not match";
      message.classList.add("error");
  }
});


document.getElementById("confirm_input2_ssh2").addEventListener("keyup", function() {
  var password = document.getElementById("input2S_ssh2").value;
  var confirmPassword = document.getElementById("confirm_input2_ssh2").value;
  var message = document.getElementById("message5");

  if (password === confirmPassword) {
    message.innerHTML = "";
      message.classList.remove("error");
  } else {
      message.innerHTML = "Passwords do not match";
      message.classList.add("error");
  }
});



const checkbox = document.getElementById('11');
const inputgtway = document.getElementById('gtway');
const inputnetmask = document.getElementById('netmask');
const inputip = document.getElementById('ip');


inputgtway.addEventListener('input', function() {
  if (checkbox.checked) {
    alert('DHCP is on, please desactivate DHCP to change Gateway');
    inputgtway.disabled = true;
  }
});

inputnetmask.addEventListener('input', function() {
  if (checkbox.checked) {
    alert('DHCP is on, please desactivate DHCP to change Netmask');
    inputnetmask.disabled = true;
  }
});

inputip.addEventListener('input', function() {
  if (checkbox.checked) {
    alert('DHCP is on, please desactivate DHCP to change IP');
    inputip.disabled = true;
  }
});


function mouseOver() {
  document.getElementById("error2").style.display = "block";
}

function mouseOut() {
  document.getElementById("error2").style.display = "none";
}
function mouseOver2() {
  document.getElementById("error3").style.display = "block";
}

function mouseOut2() {
  document.getElementById("error3").style.display = "none";
}
