var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }


}
var moda = document.getElementById("myModa");
var bt = document.getElementById("myBt");
var span = document.getElementsByClassName("closee")[0];
bt.onclick = function() {
  moda.style.display = "block";
}
span.onclick = function() {
  moda.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == moda) {
    moda.style.display = "none";
  }
}
