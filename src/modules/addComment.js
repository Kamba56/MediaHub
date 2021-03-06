import countComment from './countComment.js';
import postComment from './postComments.js';
import showComment from './showComments.js';

const addComment = async (movie) => {
  const form = document.querySelector('#comment-form');
  const username = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  await form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await postComment(movie.imdbid, username.value, comment.value);
    await showComment(movie);
    countComment();
    form.reset();
  });
  countComment();
};

export default addComment;