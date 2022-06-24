import addComment from './addComment.js';
import showComment from './showComments.js';

const popUp = document.querySelector('#pop-up');

const popup = async (movies) => {
  const commentBtn = document.querySelectorAll('.my-btn');
  await commentBtn.forEach(async (btn) => {
    await btn.addEventListener('click', async () => {
      const btnID = btn.id;
      await movies.forEach(async (movie) => {
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
          <div class="text-light comments"></div>
          <form id="comment-form" class="my-container">
            <div class="form-group">
              <input type="text" class="form-control" name="name" id="name" placeholder="Name">
            </div>
            <div class="form-group">
              <textarea class="form-control" id="comment" name="comment" rows="3" placeholder="Comment"></textarea>
            </div>
            <button type="submit" class="btn btn-light">Comment</button>
          </form>
          </div>    
          `;
          await showComment(movie);
          await addComment(movie);
          const btnClose = document.querySelector('.btnClose');
          btnClose.addEventListener('click', () => {
            popUp.style.display = 'none';
          });
        }
      });
    });
  });
};

export default popup;