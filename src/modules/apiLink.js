const { default: populate } = require('./createList.js');

const getList = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66f4637391msh5ab178dcc77e59fp17fd5djsn222299600c7f',
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