var cookBtn = document.getElementById('lets-cook');
var sidesBtn = document.getElementById('side');
var dessertBtn = document.getElementById('dessert');
var mainBtn = document.getElementById('main');
var recipeBtn = document.getElementById('recipe-add');
var clearBtn = document.getElementById('clear');
var burgerImage = document.getElementById('image');
var displayRecipe = document.getElementById('dish');

var crockPot = document.querySelector('.img1');

var showRecipe = document.getElementById('showRecipe');

cookBtn.addEventListener('click', letsCook);
sidesBtn.addEventListener('click', dishBtn);
dessertBtn.addEventListener('click', dishBtn);
mainBtn.addEventListener('click', dishBtn;
recipeBtn.addEventListener('click', makeDish);
clearBtn.addEventListener('click', clearDish);
burgerImage.addEventListener('click', imageFade);
displayRecipe.addEventListener('click', showDish);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeDish() {
  var side = sides[getRandomIndex(sides)];
  var main = mains[getRandomIndex(mains)];
  var dessert = desserts[getRandomIndex(desserts)];
  crockPot.classList.toggle('hidden');
  clearBtn.classList.toggle('fadeIn');
  if (sidesBtn.checked) {
    showRecipe.innerHTML = `<h4>This is your side: ${side}</h4>`
  } else if (mainBtn.checked) {
    showRecipe.innerHTML = `<h4>This is your main dish: ${main}</h4>`
  } else (dessert.Btn){
    showRecipe.innerHTML = `<h4>This is your dessert: ${dessert}</h4>`
  }
}


//
