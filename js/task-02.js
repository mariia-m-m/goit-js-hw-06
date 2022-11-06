const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul#ingredients');
 
const arr = [];
for (let ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  arr.push(ingredientEl)
} 
  ulEl.append(...arr);



// Другий варіант
// const elements = ingredients.map(ingredient => {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = `${ingredient}`;
//   ingredientEl.classList.add('item');
 
// }
// )
//   ulEl.append(...elements);


