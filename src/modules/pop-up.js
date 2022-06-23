const popUp = document.querySelector('#pop-up');

const popup = (movies) => {
  const commentBtn = document.querySelectorAll('.my-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnID = btn.id;
      movies.forEach((movie) => {
        if (movie.imdbid == btnID) {
          popUp.style.display = 'block';
          popUp.innerHTML = 
          `
          <div class="popup-design">
          <button class="btnClose">&times;</button>
          <div class="pop-img">
          <img src="${movie.imageurl[0]}" alt="popup image">
          </div>
          <h2 class="title">${movie.title}</h2>
          <p class="discription">${movie.synopsis}</p>
          </div>    
          `;
        }
      });
       const btnClose = document.querySelector('.btnClose');
        btnClose.addEventListener('click', () =>{
          popUp.style.display = 'none';
        });
    });
  });
}

export default popup;
