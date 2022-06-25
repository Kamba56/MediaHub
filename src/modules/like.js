import addLike from './addLikes.js';
import displayLikes from './displayLikes.js';

const like = async (movies) => {
  const likebtn = Array.from(document.querySelectorAll('.my-btn1'));

  await likebtn.forEach(async (btn) => {
    const btnID = btn.id;
    await movies.forEach(async (elem, index) => {
      const iD = `like${index}`;
      if (btnID === iD) {
        await btn.addEventListener('click', async () => {
          await addLike(elem.imdbid);
          const likeArr = await displayLikes();
          likeArr.forEach((like) => {
            if (like.item_id === elem.imdbid) {
              btn.querySelector('span').innerHTML = like.likes;
            }
          });
        });
      }
    });
  });
}

export default like;