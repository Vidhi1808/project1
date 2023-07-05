function validateform(){
  var returnval=true;
var name=document.forms['myform']["fname"].value;
console.log(name);
if(name.length<3){

var string="*Atleast 5 words";
document.getElementById("errorname").innerHTML=string;
returnval=false;
}
else if(name.length>=3){
document.getElementById("errorname").innerHTML="";
}
var email=document.forms['myform']["email"].value;
if(email.length>30){
var string="*atmost 30 words";
document.getElementById("errormail").innerHTML=string;
returnval=false;
}
else if(email.length<=30){
document.getElementById("errormail").innerHTML="";
}

var phone=document.forms['myform']["phone"].value;
if(phone.length!=10){
var string="*Invalid Number";
document.getElementById("errorphone").innerHTML=string;
returnval=false;
}
else if(phone.length==10){
document.getElementById("errorphone").innerHTML="";
}
var password=document.forms['myform']["password"].value;
if(password.length<6){
var string="*atleast 7 words";
document.getElementById("errorpassword").innerHTML=string;
returnval=false;
}
else if(password.length>=6){
document.getElementById("errorpassword").innerHTML="";
}
var conpassword=document.forms['myform']["confirm"].value;
if(password!=conpassword){
var string="*password does not match";
document.getElementById("errorconpassword").innerHTML=string;
returnval=false;
}
else if(password==conpassword){
document.getElementById("errorconpassword").innerHTML="";
}

if(returnval==true){
 
alert('Form submitted');

}
// console.log(returnval);
return returnval;

}
function myfunction(){
if(validateform()){
  window.location.port=".http://localhost:3000/project1";
}

 }
 export  {validateform,myfunction};
