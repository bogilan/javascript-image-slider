window.onload = () => {

const images = document.querySelectorAll('.image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const radioBtns = document.querySelectorAll('.radio-btn');

radioBtns[0].checked = true;

prevBtn.addEventListener('click', () => {
  // Get index of image with class 'active'
  let activeIndex = Array.from(images).findIndex((img) => img.classList.contains('active'));
  if(activeIndex === 0) { // if index is 0, which is first img
    activeIndex = images.length - 1; // set active index to last img element
  }
  else {
    activeIndex--; // else decrease index by 1
  }
  // call setImage and checkRadioBtns functions on Active Index
  setImage(activeIndex);
  checkRadioBtns(radioBtns, activeIndex);
});


nextBtn.addEventListener('click', () => {
  // get index of 'active'
  let activeIndex = Array.from(images).findIndex((img) => img.classList.contains('active'));
  if(activeIndex === images.length - 1) { // if last image
    activeIndex = 0; // return index to 0 which is first img
  }
  else {
    activeIndex++; // else increase index by 1
  }
  // call functions
  setImage(activeIndex);
  checkRadioBtns(radioBtns, activeIndex);
});

// setImage function takes index as input
function setImage(activeIndex) {
  images.forEach((img, i) => { // loops through all images
    if(i === activeIndex) { // where img index is equal to activeIndex
      img.classList.add('active'); // set class to 'active'
    }
    else {
      img.classList.remove('active'); // else remove 'active' class
    }
  })
}

// checkRadioBtns function takes all radio btns and index as input
function checkRadioBtns(radioBtns, activeIndex) {
  radioBtns.forEach((radioBtn, i) => { // loop through radio buttons
    if (i === activeIndex) { // where index is equal to activeIndex
      radioBtn.checked = true; // check radio btn
    } else {
      radioBtn.checked = false; // else deselect btn
    }
  });
}

// change image on selecting radio btn
for (let i = 0; i < radioBtns.length; i++) { // loop through all radio btns
  const radioBtn = radioBtns[i]; // store radio btn
  const image = images[i]; // and following img
  radioBtn.addEventListener('change', ()=> { // on change btn event
    images.forEach(img => { // remove class 'active' from all images
      img.classList.remove('active');
    })
    if (radioBtn.checked) { // if radio btn is checked
      image.classList.add('active'); // add 'active' class to img
      radioBtns.forEach((btn, index) => { // loop through radio btns
        if(index != i) { // and uncheck all btns whose index is different from active index
          btn.checked = false;
        }
      })
    }
  })
}

}