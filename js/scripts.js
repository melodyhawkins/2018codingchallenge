const body = document.querySelector("body");
const div = document.querySelector("div");

const newH2 = document.createElement("h2");
newH2.textContent = "Vacations are no longer optional....";
newH2.className = "purple-text";
div.appendChild(newH2);

const lake = "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60c3b92d51f407ac2d0a8a42417053df&auto=format&fit=crop&w=1500&q=80";

let image1 = document.getElementById("simple-life");

image1.addEventListener('click', (e) => {
    image1.setAttribute("src", lake);
  });

const sandyBeach = "https://images.unsplash.com/photo-1532608861228-e677c2d62418?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91d88425e6ee80555b0f26390d881260&auto=format&fit=crop&w=1500&q=80";

let image2 = document.getElementById("beach");

image2.addEventListener('click', (e) => {
    image2.setAttribute("src", sandyBeach);
  });

const tulips = "https://images.unsplash.com/photo-1462456490601-4f7e60c96c5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e3d3eaa2584551b837ec95f708b25b8&auto=format&fit=crop&w=1334&q=80";

let image3 = document.getElementById("tulips");

image3.addEventListener('click', (e) => {
    image3.setAttribute("src", tulips);
  });