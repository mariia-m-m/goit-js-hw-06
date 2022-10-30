const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  ingredientEl.classList.add('item');
  console.log(ingredientEl)
  const ulEl = document.querySelector('ul#ingredients') 
ulEl.append(ingredientEl)
}
)


