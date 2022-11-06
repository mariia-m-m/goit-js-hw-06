const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulImages = document.querySelector('ul.gallery')


const makeGalery = images.map(img => `<li><img src="${img.url}" alt="${img.alt}"></li>`)
  .join("");

  
ulImages.insertAdjacentHTML("beforebegin", makeGalery);

// Styles
ulImages.style.display = "flex";
ulImages.style.justifyContent = "center";
ulImages.style.flexWrap = "no-wrap"; 

const cards = document.querySelectorAll('img')
cards.forEach(element => {
  element.style.width = "500px";
  element.style.display = "block"
})






