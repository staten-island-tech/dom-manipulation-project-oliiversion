const DOMSelectors = {
  button: document.getElementById("button"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-box"),
  points: document.querySelectorAll(".points"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "pink";
  text.textContent = "big pink box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
function changeLi() {
  DOMSelectors.points.forEach((point) => {
    console.log(points);
  });
}

const dog = "bark";
DOMSelectors.box.insertAdjacentHTML("afterend", <h1>Dogges</h1>);
