import displayComments from './displayComments.js';

const popUp = document.querySelector('#pop-up');

const popup = async (movies) => {
  const commentBtn = document.querySelectorAll('.my-btn');
  commentBtn.forEach(async (btn) => {
    btn.addEventListener('click', () => {
      const btnID = btn.id;
      movies.forEach(async (movie) => {
        const comments = await displayComments(movie.imdbid);
        const store = await comments.map((elem) => `<h4>${elem.username}</h4>
          <p>${elem.comment}</p>
          <p>${elem.creation_date}</p>
          `).join('');
        if (movie.imdbid === btnID) {
          popUp.style.display = 'block';
          popUp.innerHTML = `
          <div class="popup-design">
          <button class="btnClose">&times;</button>
          <div class="pop-img">
          <img src="${movie.imageurl[0]}" alt="popup image">
          </div>
          <h2 class="title">${movie.title}</h2>
          <p class="discription">${movie.synopsis}</p>
          <h3>Comments</h3>
          <div class="text-light comments">${store}</div>
          </div>    
          `;
        }
        const btnClose = document.querySelector('.btnClose');
        btnClose.addEventListener('click', () => {
          popUp.style.display = 'none';
        });
      });
    });
  });
};

export default popup;
