// activate icons
feather.replace() ;

// --------- activate plugin mixitup ---------------------------------------------

var mixer = mixitup('.galleryPosters', {
  animation: {
    effects: 'fade scale(0.5)'
  },
  controls: {
    toggleLogic: 'or'
  }
});


// --------- search name ---------------------------------------------


document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('mix');

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();

        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } else {
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
});

// --------- loop in filter options ---------------------------------------------

// const posters = require('data.json')
// console.log(Object.values(posters.filters));


// --------- replace poster img cover by img back view on mousenter ---------------------------

var card_poster__images = document.getElementsByClassName('card_poster__image') ;


// for(var i = 0; i < card_poster__images.length; i++) {
//   card_poster__images[i].addEventListener('mouseenter', e => {
//     console.log('enter');
//   });
// }


Array.from(card_poster__images).forEach(function(card_poster__image) {

  card_poster__image.addEventListener('mouseenter', e => {
    // console.log('enter');
    // card_poster__image.setAttribute('src','img/back/1.jpg')

    card_poster__image.classList.remove('img-fluid');
    card_poster__image.classList.add('img-fluid-bck');

    // card_poster__image.style.height = '350px';
    // card_poster__image.style.display = 'block';


    card_poster__image.src = card_poster__image.src.replace('cover', 'back');

    // card_poster__image.style.width = 'auto';
  });

  card_poster__image.addEventListener('mouseleave', e => {
    // console.log('leave');
    card_poster__image.classList.remove('img-fluid-bck');
    card_poster__image.classList.add('img-fluid');

    // card_poster__image.style.height = 'auto';

    card_poster__image.src =  card_poster__image.src.replace('back', 'cover');


    // card_poster__image.style.width = '100%';
  });

});

// --------- Calculate number of elements -------------------------------------


// console.log('number of posters are : ', counterNumPosters.length);

var cardPoster = document.querySelectorAll('.mix') ;
var counterPosterTop = document.getElementById('counterNumPosters') ;
// console.log(counterNumPosters.length);

const element = document.querySelector('.mix');
const displayProp = window.getComputedStyle(element);

console.log('display css of'+ element + displayProp.display) ;

// function counterNumPosters(cardPoster) {

var test = 0;

cardPoster.forEach((cardPoster, i) => {
  if (getComputedStyle(counterPosterTop).getPropertyValue('display')  !== "hidden") {
    test++ ;
  }
});

console.log(test, 'yo test ');

// counterPosterTop.innerText = `${cardPoster.length} posters are displayed`;

// if (cardPoster.style.display === 'none') {
console.log('total count: ', cardPoster.length);
counterPosterTop.innerText = `${cardPoster.length} posters are displayed`;
// }


var countAllPosters = document.querySelectorAll('.countAllPosters') ;
var totalPostersDisplay = document.getElementById('totalPostersDisplay') ;


console.log('total count: ', numPostersTest.length);
totalPostersDisplay.innerText = `${numPostersTest.length} posters are displayed`;


// var cardPosterClass = document.getElementsByClassName('js-item');
// var Shuffle = window.Shuffle;
//
// var myShuffle = new Shuffle(document.querySelector('#galleryPosters'), {
//   itemSelector: cardPosterClass,
//   sizer: null
// });



// function counterNumPosters(cardPoster) {
//
//   console.log('total count: ', cardPoster.length);
//   counterPosterTop.innerText = `${cardPoster.length} posters are displayed`;
//   return cardPoster.length;
//
// }
// //
// counterNumPosters(cardPoster);





// for(var i = 0; i < counterNumPosters.length; i++) {
//     inputs[i].addEventListener("click", function(){ alert("WOrks"); });
// }
//

//
//
// myFunction(counterNumPosters);



// Sort posters by popularity, price ascending and descending

var sortByOptionSelect = document.getElementById('sortBy');
var sortByOption = document.getElementsByTagName('option');
var sortByOptionValue = sortByOption.value;

var cardPoster = document.getElementsByTagName('.card_poster');
var cardPosterClass = document.getElementsByClassName('card_poster');
var galleryPosters = document.getElementById('gallery');



// sortByOptionSelect.addEventListener('input', function (event) {
//
//   switch(event.target.value) {
//
//     case "sortByPopularity":
//     console.log('sortByPopularity');
//     // for (var i = 0; i < cardPosterClass.length; i++) {
//     //   cardPosterClass[i].shuffle();
//     // }
//     // forEach((cardPosterClass, i) => {
//     //   cardPosterClass.shuffle();
//     // });
//
//     // shuffle(galleryPosters.value);
//
//
//
//     break;
//
//     case "sortByPriceAsc":
//     console.log('sortByPriceAsc');
//     // cardPoster.getAttribute('price').sort(function(a, b){return b-a}) ;
//
//     break;
//
//     case "sortByPriceDesc":
//     console.log('sortByPriceDesc');
//     break;
//
//     default:
//     console.log('nada');
//   }
//
// });


// var cardPosterClass = document.getElementsByClassName('js-item');
// var Shuffle = window.Shuffle;
//
// var myShuffle = new Shuffle(document.querySelector('#galleryPosters'), {
//   itemSelector: cardPosterClass,
//   sizer: null
// });
