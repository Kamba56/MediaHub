const displayLikes = async () => {
  const options = {
    method: 'GET',
  };
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6tnbAuztHu5w2iAn4Bga/likes', options);
  return data.json();
};

export default displayLikes;