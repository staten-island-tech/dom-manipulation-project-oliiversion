DOMSelectors = {
  submit: document.getElementById("submit"),
};
const DOMSelectors = {
  put: document.getElementById("put"),
  name: document.getElementById("name"),
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  stuff: document.getElementById("stuff"),
  remove: document.getElementById("remove"),
};
DOMSelectors.put.addEventListener("click", function () {
  let p = DOMSelectors.name.value;
  let h2 = DOMSelectors.title.value;
  let image = DOMSelectors.image.value;

  DOMSelectors.stuff.insertAdjacentHTML(
    "",
    `<div class="stuff">
             <h2>${h2}</h2>
              <p>${p}</p>
              <img class="stuff-image" src="${image}">
              <br>

            
      </div>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.title.value = "";
  DOMSelectors.image.value = "";
});

const resetButton = document.getElementById("reset-button");

function addNewDiv() {}

DOMSelectors.container.insertAdjacentHTML(
  "afterbegin",
  `<div class="display">
        <image src></image>
        <h1 class="song">Title: ${song}</h1>
        <img src="${img}" class="myImage"alt="">
        <h2 class="art">Song By:${artist}</h2>
        <button id="remove"    </button>
    </div>`
);
