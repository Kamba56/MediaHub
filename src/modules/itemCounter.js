const items = () => {
  const list = document.querySelector('#list');
  // take the movie list from html elements
  const movieList = Array.from(list.querySelectorAll('.grid-item'));
  document.getElementById('num').innerHTML = movieList.length;
};

export default items;