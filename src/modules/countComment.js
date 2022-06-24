const countComment = () => {
  const commentList = document.querySelector('.comments');
  const comments = commentList.querySelectorAll('div');
  document.querySelector('#no-of-comments').innerHTML = comments.length;
};

export default countComment;