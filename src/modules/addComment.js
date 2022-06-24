import postComment from './postComments.js';
import showComment from './showComments.js';

const addComment = async (movie) => {
  const form = document.querySelector('#comment-form');
  const username = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  await form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await postComment(movie.imdbid, username.value, comment.value);
    showComment(movie);
    form.reset();
  });
};

export default addComment;