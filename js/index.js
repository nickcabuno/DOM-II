const navButton = document.querySelector(".nav");
navButton.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
  });

navButton.addEventListener("mouseout", (event) => {
    event.target.style.color = "";
  });

const busPic = document.querySelector("header img");
busPic.addEventListener("dblclick", (event) => {
    busPic.classList.remove("small")
});

busPic.addEventListener("click", (event) => {
    busPic.classList.add("small")
});


var dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "tan";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    event.target.appendChild(dragged);
  }
}, false);