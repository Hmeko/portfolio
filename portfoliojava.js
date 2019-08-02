$(document).ready(function(){
	$("h1").fadeOut()
})
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openNav() {
  document.getElementById("float").style.width = "250px";
}
function closeNav() {
  document.getElementById("float").style.width = "0";
}
function openNav() {
  document.getElementById("font").style.width = "250px";
  document.getElementById("body").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("float").style.width = "0";
  document.getElementById("body").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}