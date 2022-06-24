const { default: populate } = require('./createList.js');

const getList = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '88162f751fmsh22a6333f263db1ap10ffe9jsnefeb1699da94',
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