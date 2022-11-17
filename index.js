const DOMSelectors = {
  put: document.getElementById("put"),
  name: document.getElementById("name"),
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  stuff: document.getElementById("stuff"),
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

            
              /* <button class="remove-btn" onclick="this.parentElement.remove()">delete</button>
              cannot be onclick button!!! */
      </div>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.title.value = "";
  DOMSelectors.image.value = "";
});
