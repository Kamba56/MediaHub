const addLike = async (itemId) => {
  const addUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6tnbAuztHu5w2iAn4Bga/likes';
  await fetch(addUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
};
export default addLike;