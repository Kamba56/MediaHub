import displayComments from './displayComments.js';

const showComment = async (movie) => {
  const comments = await displayComments(movie.imdbid);
  const store = (comments === '') ? '' : comments.map((elem) => `
  <div class="com">
    <h4>${elem.username}</h4>
    <p>${elem.comment}</p>
    <p>${elem.creation_date}</p>
  </div>
    `).join('');

  document.querySelector('.comments').innerHTML = store;
};

export default showComment;