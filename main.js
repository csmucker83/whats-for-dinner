var showRecipeBtn = document.getElementById('lets-cook')
var sidesBtn = document.getElementById('side')
var mainBtn = document.getElementById('main')
var dessertBtn = document.getElementById('dessert')
var recipeFormBtn = document.getElementById('recipe-add')
var addNewBtn = document.getElementById('add-new')
var clearBtn = document.getElementById('clear')

var crockPotBtn = document.querySelector('.img1')
var displayedRecipe = document.getElementById('recipe')

showRecipeBtn.addEventListener('click', showDish)
recipeFormBtn.addEventListener('click', displayAddForm)

clearBtn.addEventListener('click', clearRecipe)
mainBtn.addEventListener('click', createBtn)
sidesBtn.addEventListener('click', createBtn)
dessertBtn.addEventListener('click', createBtn)

function createBtn() {
  showRecipeBtn.classList.add('fadeIn')
}

function showDish(e) {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];
  crockPotBtn.classList.toggle('hidden')
  clearBtn.classList.toggle('fadeIn')
  if (sidesBtn.checked) {
    console.log(sidesBtn)
    displayedRecipe.innerHTML = `
      <h6 class='recipe'>Your dish will be:<br><center>${randomSide}</h6>`
  } else if (mainBtn.checked) {
      displayedRecipe.innerHTML = `
        <h6 class='recipe'>Your dish will be:<br><center>${randomMain}</h6>`
    } else {
        displayedRecipe.innerHTML = `
          <h6 class='recipe'>Your dish will be: <br><center>${randomDessert}</h6>`
    }
  }

function displayAddForm() {
  footer.classList.toggle('fadeIn');
}

function addRecipeToList() {
  if (recipeType.value === 'side') {
    sides.push(recipeName.value)
  } else if (recipeType.value === 'main') {
    mains.push(recipeName.value)
  } else {
    desserts.push(recipeName.value)
  }
}

function displayNewRecipe () {
  displayedRecipe.classList.remove('hidden');
  if (!recipeType.value && !recipeName.value) {
    addNewBtn.disabled = true;
  } else {
    crockPotBtn.classList.add('hidden');
    clearBtn.classList.toggle('fadeIn');
    displayedRecipe.innerHTML = `
    <h5 class='recipe'>You should make:</h5>
    <h3 class='main'>${recipeName.value}</h3>`
  }
  displayAddForm();
  addNewBtn.disabled = false;
}

function clearRecipe() {
  displayedRecipe.classList.add('hidden');
  crockPotBtn.classList.remove('hidden');
  clearBtn.classList.remove('fadeIn')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
