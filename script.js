window.onload = () => {

const images = document.querySelectorAll('.image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const radioBtns = document.querySelectorAll('.radio-btn');

radioBtns[0].checked = true;

prevBtn.addEventListener('click', () => {
  // Get index of image with class 'active'
  let activeIndex = Array.from(images).findIndex((img) => img.classList.contains('active'));
  // if index is 0 (which is first img) set active index to last img element, else decrease by 1
  activeIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  // call setImage and checkRadioBtns functions on Active Index
  setImage(activeIndex);
  checkRadioBtns(radioBtns, activeIndex);
});

nextBtn.addEventListener('click', () => {
  // get index of 'active'
  let activeIndex = Array.from(images).findIndex((img) => img.classList.contains('active'));
  // if last image, return index to 0 (first img), else increase index by 1
  activeIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
  // call functions
  setImage(activeIndex);
  checkRadioBtns(radioBtns, activeIndex);
});

// setImage function takes activeIndex as input
function setImage(activeIndex) {
  // loops through all images and remove active class
  images.forEach(img => { img.classList.remove('active')});
  // add active class to image with activeIndex number
  images[activeIndex].classList.add('active');
}

// checkRadioBtns function takes activeIndex as input
function checkRadioBtns(radioBtns, activeIndex) {
  // loops through all radio buttons and their indexes
  radioBtns.forEach((radioBtn, index) => {
    // if index is equal to activeIndex check button else uncheck
    radioBtn.checked = index === activeIndex ? true : false; 
  });  
}

// for each radio button and following index
radioBtns.forEach((radioBtn, index) => {
  radioBtn.addEventListener('change', ()=> { // add 'change' event listener
    images.forEach(img => img.classList.remove('active')); // remove active class from all images
    images[index].classList.add('active'); // add active class to image with index of clicked button
    checkRadioBtns(radioBtns, index); // call checkRadioBtns function in order to check only radio button with active index
  })
})

}