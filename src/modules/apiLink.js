const { default: populate } = require('./createList.js');

const getList = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8521026ac3mshba4d66bef7a1a59p182b65jsn3f8d2248d96e',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  };

  fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=2018&end_year=2019&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
    .then((response) => response.json())

    .then((response) => {
      populate(response.results);
    });
};

export default getList;