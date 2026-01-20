const slides = document.querySelectorAll('.slide');
const nextBtns = document.querySelectorAll('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
  slides[index].classList.remove('active');
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
}

nextBtns.forEach(btn =>
  btn.addEventListener('click', () => showSlide(index + 1))
);

prevBtn.addEventListener('click', () => showSlide(index - 1));
