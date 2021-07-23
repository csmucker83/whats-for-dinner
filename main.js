var cookBtn = document.getElementById('lets-cook');
var sidesBtn = document.getElementById('side');
var dessertBtn = document.getElementById('dessert');
var mainBtn = document.getElementById('main');
var recipeBtn = document.getElementById('recipe-add');
var clearBtn = document.getElementById('clear');
var burgerImage = document.getElementById('image');
var displayRecipe = document.getElementById('dish');

cookBtn.addEventListener('click', letsCook);
sidesBtn.addEventListener('click', );
dessertBtn.addEventListener('click', );
mainBtn.addEventListener('click', );
recipeBtn.addEventListener('click', makeDish);
clearBtn.addEventListener('click', clearDish);
burgerImage.addEventListener('click', imageFade);
displayRecipe.addEventListener('click', showDish);




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//
