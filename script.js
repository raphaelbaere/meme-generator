const input = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const memeImgContainer = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

input.addEventListener('keyup', () => {
  memeText.innerHTML = input.value;
});

inputImg.addEventListener('change', (event) => {
  const reader = new FileReader();
  if (inputImg.files[0]) {
    reader.readAsDataURL(inputImg.files[0]);
    reader.onload = function insertImg() {
      memeImg.src = reader.result;
      memeText.left = event.offSetLeft;
      memeText.right = event.offSetRight;
    };
  }
});

fire.addEventListener('click', () => {
  memeImgContainer.classList.remove('earth');
  memeImgContainer.classList.remove('water');
  memeImgContainer.classList.add('fire');
});

water.addEventListener('click', () => {
  memeImgContainer.classList.remove('fire');
  memeImgContainer.classList.remove('earth');
  memeImgContainer.classList.add('water');
});

earth.addEventListener('click', () => {
  memeImgContainer.classList.remove('water');
  memeImgContainer.classList.remove('fire');
  memeImgContainer.classList.add('earth');
});

meme1.addEventListener('click', () => {
  memeImg.src = meme1.src;
});
meme2.addEventListener('click', () => {
  memeImg.src = meme2.src;
});
meme3.addEventListener('click', () => {
  memeImg.src = meme3.src;
});
meme4.addEventListener('click', () => {
  memeImg.src = meme4.src;
});
