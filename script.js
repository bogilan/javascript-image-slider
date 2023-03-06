window.onload = () => {

const images = document.querySelectorAll('.image');
const activeImage = document.querySelector('.active');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (image.classList.contains('active')) {
        image.classList.remove('active');
        if (i === 0) {
          images[images.length - 1].classList.add('active');
        } else {
          images[i - 1].classList.add('active');
        }
        break;
      }
    }
});

nextBtn.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (image.classList.contains('active')) {
        image.classList.remove('active');
        if (i === images.length - 1) {
          images[0].classList.add('active');
        } else {
          images[i + 1].classList.add('active');
        }
        break;
      }
    }
});


}