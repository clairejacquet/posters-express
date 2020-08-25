var posters = require('./database/data.json');

const searchPoster = (title, queryString) => {

  // if no search text, list all posters
  if(!queryString) {
    return true;
  }

  if(title.toLowerCase().includes(queryString)) {
    return true;
  }
}

const dataMapper = {
  search: (queryString, callback) => {
    callback(
      posters.filter(poster => {

        return searchPoster(poster.title, queryString)
      })
    );
  },

  getPosterById: (posterId, callback) => {
    const poster = posters.find(({ id }) => id == posterId);
    callback(poster);
},


}


module.exports = dataMapper;
