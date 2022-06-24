import displayLikes from './displayLikes.js';
import addLike from './addLikes.js';
import popup from './pop-up.js';

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

  const likebtn = Array.from(document.querySelectorAll('.my-btn1'));

  await likebtn.forEach(async (btn) => {
    const btnID = btn.id;
    await movies.forEach(async (elem, index) => {
      const iD = `like${index}`;
      if (btnID === iD) {
        await btn.addEventListener('click', async () => {
          addLike(elem.imdbid);
          const likeArr = await displayLikes();
          likeArr.forEach((like) => {
            if (like.item_id === elem.imdbid) {
              btn.querySelector('span').innerHTML = like.likes;
            }
          });
        });
      }
    });
  });
  popup(movies);
};

export default populate;