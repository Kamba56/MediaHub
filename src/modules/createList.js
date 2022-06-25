import displayLikes from './displayLikes.js';
import popup from './pop-up.js';
import like from './like.js';

const list = document.querySelector('#list');

const populate = async (movies) => {
  const likeArray = await displayLikes();
  movies.forEach((movie, index) => {
    if (index < 24) {
      let noOfLikes = 0;
      likeArray.forEach((like) => {
        if (like.item_id === movie.imdbid) {
          noOfLikes = like.likes;
        }
      });
      list.innerHTML
    += `
    <div class="grid-item">
    <figure>
      <img src="${movie.imageurl[0]}" alt="Cover art of movie">
    </figure>

    <h2 class="movie-title">${movie.title}</h2>

    <div class="my-flex">
      <button type="button" class="btn my-btn" id="${movie.imdbid}">Comments</button>
      <button type="button" class="btn my-btn1" id= "like${index}">
        <span>${noOfLikes}</span>
        <i class="bi bi-heart"></i>
      </button>
    </div>
  </div>
    `;
    }
  });

  await like(movies);
  popup(movies);
};

export default populate;
