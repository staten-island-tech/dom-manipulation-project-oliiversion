DOMSelectors = {
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
