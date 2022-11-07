const DOMSelectors = {
  button: document.getElementById("button"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "big red box";
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
