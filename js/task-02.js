const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul#ingredients');
 
const elements = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = `${ingredient}`;
  ingredientEl.classList.add('item');
  return ingredientEl;
}
)

  ulEl.append(...elements);


