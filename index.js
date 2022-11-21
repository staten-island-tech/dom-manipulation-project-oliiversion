/* DOMSelectors = {
  submit: document.getElementById("submit"),
  name: document.getElementById("name"),
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  stuff: document.getElementById("stuff"),
};
DOMSelectors.submit.addEventListener("click", function () {
  p = DOMSelectors.name.value;
  h2 = DOMSelectors.title.value;
  image = DOMSelectors.image.value;
  DOMSelectors.stuff.insertAdjacentHTML(
    "afterbegin",
    `<div class="stuff">
              <h2>${h2}</h2>
              <p>${p}</p>
              <img class="stuff-image" src="${image}">
              <br>
              <button class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
      </div>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.title.value = "";
  DOMSelectors.image.value = "";
});
 */

const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  imgURL: document.getElementById("imgURL"),
  create: document.getElementById("create"),
  container: document.getElementById("container"),
  display: document.querySelector("display"),
  remove: document.getElementById("remove"),
};

const resetButton = document.getElementById("reset-button");

function addNewDiv() {}

DOMSelectors.create.addEventListener("click", function () {
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let img = DOMSelectors.imgURL.value;

  

// the text that the button is initialized with
const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "You have clicked this button.";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener(
    "click",
    eventListener,
    {
      passive: true,
      once: true
    }
  );
}
resetButton.addEventListener(
  "click",
  () => {
    buttonToBeClicked.textContent = initialText;
    addListener();
  }
);

addListener();

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
});