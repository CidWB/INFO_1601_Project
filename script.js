function leaveComment(){
  let modal = document.querySelector(".modal");
  let overlay = document.querySelector(".overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeComment(){
  let modal = document.querySelector(".modal");
  let overlay = document.querySelector(".overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function addToList(ingredient){
  console.log("working");
  let target = document.getElementById('ingredients');
  let html = ``;
  html += `<li id="${ingredient}"><span>${ingredient}</span><a href="#" onclick="removeFromList('${ingredient}')">X</a></li>`;
  target.innerHTML += html;
}

function removeFromList(ingredient){
  let child = document.getElementById(`${ingredient}`);
  let parent = document.getElementById(`ingredients`);
 parent.removeChild(child);
}
