const displayCommments = async (itemId) => {
  const options = {
    method: 'GET',
  };
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6tnbAuztHu5w2iAn4Bga/comments?item_id=${itemId}`, options)
    .then((data) => data.json(), () => '');
  return response;
};

export default displayCommments;