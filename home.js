window.addEventListener('load', getStates);
window.addEventListener('load', getStates2);
window.addEventListener('load', getStates3);
window.addEventListener("load", function(){ document.getElementById('admi').style.display='none'});

function getStates(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = JSON.parse(this.responseText);
console.log(myObj);
for (i in myObj.gpios){
var output = myObj.gpios[i].output;
var state = myObj.gpios[i].state;
console.log(output);
console.log(state);

if ((output=="6")||(output=="27")||(output=="272")||(output=="50")||(output=="51")||(output=="143")||(output=="144")||(output=="145")||(output=="146")||(output=='141')||(output=='149')||(output=='147')||(output=='148')) {continue;}

if(output=='40'||output=='41'||output=='43'||output=='44'||output=='45'||output=='46'||output=='47'||output=='48'||output=='61'||output=='60'){
  document.getElementById(output).innerHTML = state;
  }
if (state == "1") {
document.getElementById(output).checked = true;

if(output=='16'){
document.getElementById('tx1').style.display='block';
document.getElementById('11').disabled = false;
document.getElementById('7').disabled = false;
document.getElementById('slid').style.display='none';
document.getElementById('21').disabled = false;
document.getElementById('actv1').style.display='none';
document.getElementById('actv10').style.display='none';


}
if(output=='17'){
document.getElementById('tx2').style.display='block';
document.getElementById('20').disabled = false;
document.getElementById('actv2').style.display='none';


}
if(output=='18'){
document.getElementById('tx3').style.display='block';
document.getElementById('19').disabled = false;
document.getElementById('actv3').style.display='none';

}


if(output=='33'){
  document.getElementById('3').disabled= false;
  document.getElementById('2').disabled= false;
  document.getElementById('56').style.display='block';
  document.getElementById('55').style.display='none';
  document.getElementById('actv8').style.display='none';
  document.getElementById('actv9').style.display='none';
  
  
  
  }
  if(output=='34'){
  document.getElementById('32').disabled= false;
  document.getElementById('22').disabled= false;
  document.getElementById('58').style.display='block';
  document.getElementById('57').style.display='none';
  document.getElementById('actv4').style.display='none';
  document.getElementById('actv5').style.display='none';
  
  
  
  }

}
else {
document.getElementById(output).checked = false;

if(output=='16'){
document.getElementById('tx1').style.display='none';
document.getElementById('11').disabled = true;
document.getElementById('7').disabled = true;
document.getElementById('slid').style.display='block';
document.getElementById('21').disabled = true;
document.getElementById('actv1').style.display='block';
document.getElementById('actv10').style.display='block';

}
if(output=='17'){
document.getElementById('tx2').style.display='none';
document.getElementById('20').disabled = true;
document.getElementById('actv2').style.display='block';


}
if(output=='18'){
document.getElementById('tx3').style.display='none';
document.getElementById('19').disabled = true;
document.getElementById('actv3').style.display='block';

}

if(output=='33'){
  document.getElementById('3').disabled= true;
  document.getElementById('2').disabled= true;
  document.getElementById('55').style.display='block';
  document.getElementById('56').style.display='none';
  document.getElementById('actv8').style.display='block';
  document.getElementById('actv9').style.display='block';
  }
  if(output=='34'){
  document.getElementById('32').disabled= true;
  document.getElementById('22').disabled= true;
  document.getElementById('57').style.display='block';
  document.getElementById('58').style.display='none';
  document.getElementById('actv4').style.display='block';
  document.getElementById('actv5').style.display='block';
  }

}}}};
xhr.open("GET", "/state", true);
xhr.send();
}

function getStates2(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  var myObj = JSON.parse(this.responseText);
  console.log(myObj);
  for (i in myObj.gpios){
  var output = myObj.gpios[i].output;
  var state = myObj.gpios[i].state;
  console.log(output);
  console.log(state);
  if(output=='54'||output=='53'){
    document.getElementById(output).innerHTML = state;
    }
  }
  }
  };
  xhr.open("GET", "/state2", true);
  xhr.send();
}


function getStates3(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  var myObj = JSON.parse(this.responseText);
  console.log(myObj);
  for (i in myObj.gpios){
  var output = myObj.gpios[i].output;
  var state = myObj.gpios[i].state;
  console.log(output);
  console.log(state);
  if(output=='40'||output=='41'||output=='43'||output=='44'||output=='45'||output=='46'||output=='47'||output=='48'||output=='60'||output=='61'){
    document.getElementById(output).innerHTML = state;
    }
  }
  }
  };
  xhr.open("GET", "/state3", true);
  xhr.send();
}


document.getElementById('actv1').onclick= function (){alert('Please Activate Station First')}
document.getElementById('actv10').onclick= function(){alert('Please Activate Station First')}
document.getElementById('actv2').onclick= function (){alert('Please Activate Acces Point First')}
document.getElementById('actv3').onclick= function (){alert('Please Activate Ethernet First')}
document.getElementById('actv4').onclick= function (){alert('Please Connect This Port To Cloud First')}
document.getElementById('actv5').onclick= function (){alert('Please Connect This Port To Cloud First')}
document.getElementById('actv8').onclick= function (){alert('Please Connect This Port To Cloud First')}
document.getElementById('actv9').onclick= function (){alert('Please Connect This Port To Cloud First')}



function toggleCheckbox(element) {
  var xhr = new XMLHttpRequest();
  if (element.checked) {
 
  xhr.open("GET", "/updatescollab?output="+element.id+"&state=1", true);
  document.getElementById('32').checked=false;
  }
  else {
    xhr.open("GET", "/updatescollab?output="+element.id+"&state=0", true);}
    xhr.send();   
}

function toggleCheckbox0 (element) {
  var xhr = new XMLHttpRequest();
  if (element.checked) {
  xhr.open("GET", "/oksendlog?output="+element.id+"&state=1", true);
   
  }
  else {
  xhr.open("GET", "/oksendlog?output="+element.id+"&state=0", true);

  }
  xhr.send();
}

function toggleCheckbox00 (element) {
  var xhr = new XMLHttpRequest();
  if (element.checked) {
  xhr.open("GET", "/oksendlog2?output="+element.id+"&state=1", true);
   
  }
  else {
  xhr.open("GET", "/oksendlog2?output="+element.id+"&state=0", true);

  }
  xhr.send();
}

function toggleCheckbox1(element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesadm?output="+element.id+"&state=1", true);
document.getElementById('22').checked=false;
}
else {xhr.open("GET", "/updatesadm?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox3 (element) {
var xhr = new XMLHttpRequest();

if (element.checked) {
xhr.open("GET", "/updateslogging?output="+element.id+"&state=1", true);
document.getElementById('52').checked=false;
}
else {xhr.open("GET", "/updateslogging?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox4 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updateslogging2?output="+element.id+"&state=1", true);
document.getElementById('5').checked=false;

}
else {xhr.open("GET", "/updateslogging2?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox5 (element) {
  var xhr = new XMLHttpRequest();
  if (element.checked) {
  xhr.open("GET", "/oknotify?output="+element.id+"&state=1", true);
   
  }
  else {
  xhr.open("GET", "/oknotify?output="+element.id+"&state=0", true);

  }
  xhr.send();
}

function toggleCheckbox55 (element) {
      var xhr = new XMLHttpRequest();
      if (element.checked) {
      xhr.open("GET", "/oknotify2?output="+element.id+"&state=1", true);
       
      }
      else {
      xhr.open("GET", "/oknotify2?output="+element.id+"&state=0", true);
    
      }
      xhr.send();
}

function toggleCheckbox7 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatescollab2?output="+element.id+"&state=1", true);
document.getElementById('3').checked=false;
}
else {xhr.open("GET", "/updatescollab2?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox8 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesadm2?output="+element.id+"&state=1", true);
document.getElementById('2').checked=false;
}
else {xhr.open("GET", "/updatesadm2?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox14 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatedhcp?output="+element.id+"&state=1", true);
}
else {xhr.open("GET", "/updatedhcp?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox15 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesnatsta?output="+element.id+"&state=1", true);
}
else {xhr.open("GET", "/updatesnatsta?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox16 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesnatap?output="+element.id+"&state=1", true);
}
else {xhr.open("GET", "/updatesnatap?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox17 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesnatethernet?output="+element.id+"&state=1", true);
}
else {xhr.open("GET", "/updatesnatethernet?output="+element.id+"&state=0", true);}
xhr.send();
}

function toggleCheckbox18 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesactivatesta?output="+element.id+"&state=1", true);
document.getElementById('tx1').style.display='block';
document.getElementById('11').disabled = false;
document.getElementById('7').disabled = false;
document.getElementById('slid').style.display='none';
document.getElementById('21').disabled = false;
document.getElementById('actv1').style.display='none';
document.getElementById('actv10').style.display='none';

}
else {
xhr.open("GET", "/updatesactivatesta?output="+element.id+"&state=0", true);
document.getElementById('tx1').style.display='none';
document.getElementById('11').disabled = true;
document.getElementById('7').disabled = true;
document.getElementById('slid').style.display='block';
document.getElementById('21').disabled = true;
document.getElementById('actv1').style.display='block';
document.getElementById('actv10').style.display='block';

}
xhr.send();
}

function toggleCheckbox19 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
 
xhr.open("GET", "/updatesactivateap?output="+element.id+"&state=1", true);

document.getElementById('20').disabled = false;
document.getElementById('tx2').style.display='block';
document.getElementById('actv2').style.display='none';


}
else {
xhr.open("GET", "/updatesactivateap?output="+element.id+"&state=0", true);
document.getElementById('20').disabled = true;
document.getElementById('tx2').style.display='none';
document.getElementById('actv2').style.display='block';


}
xhr.send();
}

function toggleCheckbox20 (element) {
var xhr = new XMLHttpRequest();
if (element.checked) {
xhr.open("GET", "/updatesactivateethernet?output="+element.id+"&state=1", true);
document.getElementById('tx3').style.display='block';
document.getElementById('19').disabled = false;
document.getElementById('actv3').style.display='none';

}
else {
xhr.open("GET", "/updatesactivateethernet?output="+element.id+"&state=0", true);
document.getElementById('tx3').style.display='none';
document.getElementById('19').disabled = true;
document.getElementById('actv3').style.display='block';

}
xhr.send();
}

function reloadpage(){window.location.reload();}

//show bar when shrink 
function sho(){
var thi=document.getElementById('ici');
thi.style.overflow='visible';
thi.style.width= '20%'
if (thi.style.display == "none") {thi.style.display = "block";}
else {thi.style.display = "none";}
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

function logoutButton() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "/logout", true);
xhr.send();
setTimeout(function(){ window.open("/logged-out","_self"); }, 1000);
}

window.onload=function() {
    const dd = new Date();
    document.getElementById("datetime").innerHTML = dd.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
    });
    
}

function fcnet(){

  const targ1 = document.getElementById("li1");
  var col = document.getElementsByClassName("hid1");
  if (targ1.style.display == "none") {
   targ1.style.display='block';
   document.getElementById('li2').style.display = "block";
   document.getElementById('li3').style.display = "block";
  }
   else {
   targ1.style.display = "none";
   document.getElementById('li2').style.display = "none";
   document.getElementById('li3').style.display = "none";
   }
  
   for (let i = 0; i < col.length; i++) {
    col[i].style.display = "none";
    }
  
}

function fcnet3(){

  var col = document.getElementsByClassName("hid3");
  

   for (let i = 0; i < col.length; i++) {
    col[i].style.display = "none";
    }
  
}

function fcnet6(){
    var col = document.getElementsByClassName("hid6");
    
     for (let i = 0; i < col.length; i++) {
      col[i].style.display = "none";
      }
    
} 
  
function fcnet2(){
  const targ2 = document.getElementById("li4");
  var col = document.getElementsByClassName("hid2");
  var col2 = document.getElementsByClassName("hid22");
  
  if (targ2.style.display == "none") {
   targ2.style.display='block';
   document.getElementById('li5').style.display = "block";
  
  }
   else {
   targ2.style.display = "none";
   document.getElementById('li5').style.display = "none";
   for (let i = 0; i < col2.length; i++) {
    col2[i].style.display = "none";
    }
   }
   for (let i = 0; i < col.length; i++) {
    col[i].style.display = "none";
    }
  
}
  
function fcnet4(){
  const targ2 = document.getElementById("li8");
  var col = document.getElementsByClassName("hid4");
  
  if (targ2.style.display == "none") {
   targ2.style.display='block';
   document.getElementById('li9').style.display = "block";
   document.getElementById('li10').style.display = "block";
  
  }
   else {
   targ2.style.display = "none";
   document.getElementById('li9').style.display = "none";
   document.getElementById('li10').style.display = "none";
  
   }
   for (let i = 0; i < col.length; i++) {
    col[i].style.display = "none";
    }
}
  
function fcnet5(){
  const targ2 = document.getElementById("li11");
  var col = document.getElementsByClassName("hid5");
  
  if (targ2.style.display == "none") {
   targ2.style.display='block';
   document.getElementById('li12').style.display = "block";
   document.getElementById('li13').style.display = "block";
  
  }
   else {
   targ2.style.display = "none";
   document.getElementById('li12').style.display = "none";
   document.getElementById('li13').style.display = "none";
  
   }
  
   for (let i = 0; i < col.length; i++) {
    col[i].style.display = "none";
    }
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

function scanfunction () {
document.getElementById("sec").style.display='block';

}

function timeleft () {
document.getElementById('spin').style.display = "block";
let progress4 = 0;
let progress4incrementor = setInterval(() => {
 progress4+= 10;
  if (progress4 >= 100){ 
 clearInterval(progress4incrementor);
 setTimeout(function(){  document.getElementById('spin').style.display = "none"; }, 500);
}}, 1000);
}

function scanrealfunction(element) {
var xhr = new XMLHttpRequest();
if (element) {xhr.open("GET", "/updatescan?output="+element.id+"&state=1", true);}
else {xhr.open("GET", "/updatescan?output="+element.id+"&state=0", true);}
xhr.send();
}

