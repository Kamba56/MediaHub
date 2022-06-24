const postComment = async (itemId, user, comment) => {
  const addUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6tnbAuztHu5w2iAn4Bga/comments';
  await fetch(addUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: user,
      comment,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
};
export default postComment;