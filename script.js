async function loadListing(url){
    try {
        let response = await fetch(url);
        let result = await response.json();
        displayListing(result.meals); 
    } catch(e) {
        console.log(e);
    }
}

loadListing("https://www.themealdb.com/api/json/v1/1/list.php?i=list");

function displayListing(ingredients){
    let result = document.querySelector('#ingredientSearch');
    let html = '';
    for(let record of ingredients){
        html += `<li><a href="#${record.strIngredient}" onclick="addToList('${record.strIngredient}')">${record.strIngredient}</a></li>`;
    }
    result.innerHTML = html;
}


function openModal(id) {
  let modal = document.getElementById(id +`Modal`);
  let overlay = document.getElementById(`${id}`+`Overlay`);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(id) {
  let modal = document.getElementById(`${id}`+`Modal`);
  let overlay = document.getElementById(`${id}`+`Overlay`);
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function auto_height(elem) {
  elem.style.height = '1px';
  elem.style.height = `${elem.scrollHeight}px`;
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
