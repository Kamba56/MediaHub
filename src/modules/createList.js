import popup from './pop-up.js';
const list = document.querySelector('#list');

const populate = (movies) => {
  movies.forEach((movie, index) => {
    if (index < 24) {
      list.innerHTML
    += `
    <div class="grid-item">
    <figure>
      <img src="${movie.imageurl[0]}" alt="Cover art of movie">
    </figure>

    <h2 class="movie-title">${movie.title}</h2>

    <div class="my-flex">
      <button type="button" class="btn my-btn" id="${movie.imdbid}">Comments</button>
      <button type="button" class="btn my-btn1">
        <i class="bi bi-heart"></i>
      </button>
    </div>
  </div>
    `;

    const comment = document.querySelectorAll('.my-btn');
    comment.forEach(e => {e.addEventListener('click', () => {
      
    });
    });
    // popup(movie, comment);
    }
  });

  
};

export default populate;