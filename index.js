const DOMSelectors = {
  song: document.getElementById("song"),
  artist: document.getElementById("artist"),
  imgURL: document.getElementById("imgURL"),
  create: document.getElementById("create"),
  box: document.getElementById("box"),
  display: document.querySelector("display"),
};

DOMSelectors.create.addEventListener("click", function (event) {
  event.preventDefault();
  let input1 = DOMSelectors.song.value;
  let input2 = DOMSelectors.artist.value;
  let input3 = DOMSelectors.imgURL.value;

  function makeCard() {
    DOMSelectors.box.insertAdjacentHTML(
      "afterbegin",
      `<div class="display">
          <image src></image>
          <h1 class="song">Title: ${input1}</h1>
          <img src="${input3}" class="myImage"alt="">
        <h2 class="artist">Song By:${input2}</h2>
        <button class="remove">Delete</button>
      </div>`
    );
  }
  function erase() {
    let removes = document.querySelectorAll(".remove");
    removes.forEach((eachRemove) => {
      eachRemove.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
    });
  }

  makeCard();
  erase();
});