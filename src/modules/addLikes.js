const addLike = async (itemId) => {
  // Achieving data for likes from API
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