async function loadListing(url){
  //makes a request to the ingredient listing API url
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
  //receives an array of category objects and displays it on the page in #ingredientSearch
  let result = document.querySelector('#ingredientSearch');
  let html = '';
  for(let record of ingredients){
      html += `<li><a href="#${record.strIngredient}" onclick="getMeals('${record.strIngredient}')">${record.strIngredient}</a></li>`;
  }
  result.innerHTML = html;
}

async function getMeals(name){
 try{
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
  let result = await response.json();
  displayMeals(result.meals);
}catch(e){
   console.log(e);
}
}

function displayMeals(meals){
  let result = document.querySelector('#searchResults');
  let html = '';
  for(let record of meals){
      html += `<div class="gallery">
<a href="/food-details.html?mealId=${record.idMeal}" target="_blank">
  <img src="${record.strMealThumb}" alt="${record.strMeal}" width="500" height="500">
</a>
<div class="desc">${record.strMeal}</div>
</div>`;
  }
  result.innerHTML = html;
}

function searchIngredients() {
// Declare variables
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById('searchBar');
filter = input.value.toUpperCase();
ul = document.getElementById("ingredientSearch");
li = ul.getElementsByTagName('li');

// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];
  txtValue = a.textContent || a.innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
}
}

//both modal functions work for all menu popups
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

//for textarea in comment section
function auto_height(elem) {
elem.style.height = '1px';
elem.style.height = `${elem.scrollHeight}px`;
}
