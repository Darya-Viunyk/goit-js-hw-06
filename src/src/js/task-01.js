// show main categories amaunt.
const mainCategories = document.querySelectorAll("ul#categories > li");
console.dir(`Number of categories: ${mainCategories.length}`);

// show sub-categories info
mainCategories.forEach((elemrnt) => {
    console.dir(`Category: ${elemrnt.querySelector("h2").textContent}`);
    console.dir(`Elements: ${elemrnt.querySelectorAll("li").length}`);
});