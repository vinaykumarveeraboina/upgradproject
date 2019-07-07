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
