const numOfCategories = document.querySelectorAll('li.item').length;
console.log(`Number of categories:`, numOfCategories);

const categories = document.querySelectorAll('li.item');

categories.forEach(element => {
    console.log(`Category:`, element.querySelector("h2").textContent);
    console.log(`Elements:`, element.querySelectorAll("li").length);
})
