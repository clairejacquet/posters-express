const dataMapper = require('./dataMapper');

var posters = require('./database/data.json');

var testPostersDocu = require('./database/data.json');
var testPosters = JSON.stringify(testPostersDocu) ;

const controllers = {

  loadPosterSingleMiddleware:  (request, response, next) => {
        const posterId = request.params.id;
        dataMapper.getPosterById(posterId, poster => {
            response.locals.poster = poster;
            next();
        });
    },

  loadPostersMiddleware: (request, response, next) => {
    const queryString = request.query.search;

    dataMapper.search(queryString, (postersList) => {
      response.locals.postersList = postersList ;

      next();
    })
  },


  homePage: (request, response) => {

    var test = 'brandName';
    var navArray = [ 'Wall Art', 'Inspiration', 'artists' ] ;
    var stylesArray = ['photography', 'typography', 'graphic'] ;
    var themesArray = ['animals', 'travel', 'people', 'motivational', 'nature',  ] ;

    // console.log(testPosters);
    console.log(posters[0].filters);
    console.log(posters[0].filters[0].theme);
    console.log(posters[0].filters[0].subTheme[2]);


    response.render('index', {
        posters,
        numPosters: 0,
        numPostersTest: 0,
        brand: "Posters",
        page: {
            name: "Fresh inspiration from our artist community",
            description: "Whether your walls are looking bare or it's simply time for something new, dressing them up with art is always a great idea. Let your rooms reflect your personality with our photography, illustration and typography art prints and much, much more. There's no place like home. Especially when you're surrounded by the things you love. Our artist community is made up of creatives from all corners of the globe. Every month, we expand our catalogue with freshly curated designs. Discover the newest additions to our ever-growing collection—featuring photography, illustrations & more."
        },
        stylesArray,
        themesArray,
        navArray
    });


  }
}
// });

module.exports = controllers;
