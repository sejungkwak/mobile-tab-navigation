const imgs = document.querySelectorAll('.img');
const btns = document.querySelectorAll('.nav-item');

for ( let i = 0 ; i < btns.length ; i++ ) {
  btns[i].addEventListener('click', () => {
    removeBtnActiveClass();
    removeImgActiveClass();
    btns[i].classList.add('active');
    imgs[i].classList.add('active');
  })
}

function removeBtnActiveClass() {
  btns.forEach(btn => btn.classList.remove('active'))
}

function removeImgActiveClass() {
  imgs.forEach(img => img.classList.remove('active'))
}