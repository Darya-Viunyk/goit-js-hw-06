const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainCategories = document.querySelector("ul#ingredients");
let renderedHtml = '';
ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  renderedHtml += li.outerHTML;
});
mainCategories.insertAdjacentHTML('afterbegin', renderedHtml);