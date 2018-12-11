function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if (username == "Raman" && password == "lambton"){
  alert ("login successful");
  window.open("index.html");
  return true;



}
else {
alert("login Failed");
}
}
