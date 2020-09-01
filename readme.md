# Posters-Express - a posters website

`express` `node js` `npm` `ejs` `heroku` `flexbox`

The aim of this project was to practice express and querying data in json format.
Design replicated from Junique.com. The final version is deployed on Heroku.

👉  Please check to latest version [here](https://posters-express.herokuapp.com/)

------

## Key elements in the project

* **A search bar** that returns posters based on exact match by comparing the queried `search` parameter to the values in the data in the data mapper.

* **A Filtering and Sort system** to sort posters and display those that match certain criteria (theme).
This was made by integrating a very cool js plugin (MixItUp 3). Functionalities and options are customized in the mixitup function.

    ✔ Users can sort posters by price or name.  

    ✔ Users can filter posters by theme and style.

  ✔ By default, all posters from the dataset are displayed.



* The total amount of posters on page is updated on page load.

* Poster images change when the user hovers on the image.

##### Possible project implementations in the near future:  

* A product page for each poster (route by product id)
* A page that lists teh user's favorite posters (cookies-session)

![Preview page](https://github.com/clairejacquet/posters-express/blob/master/readme-preview.png?raw=true)
