const SHOWING_CLASS = "showing";
const slides = document.querySelectorAll(".slider-item");
const slide_num = slides.length;
const firstSlide = slides[0];
const lastSlide = slides[slide_num - 1];
const left_arrowBtn = document.querySelector(
  "body > main > div > button.arrow-btn.left-arrow"
);
const right_arrowBtn = document.querySelector(
  "body > main > div > button.arrow-btn.right-arrow"
);

// 전역변수 설정
let slide_index = 0;

// 함수선언
const nextSlide = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    let nextSlide = null;

    if (slide_index + 1 < slide_num) {
      slide_index++;
      nextSlide = currentSlide.nextElementSibling;
    } else {
      slide_index = 0;
      nextSlide = firstSlide;
    }
    nextSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
};

const previousSlide = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    let previousSlide = null;

    if (slide_index - 1 >= 0) {
      slide_index--;
      previousSlide = currentSlide.previousElementSibling;
    } else {
      slide_index = slide_num - 1;
      previousSlide = lastSlide;
    }
    previousSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
};

// 초기화 함수
const init = () => {
  left_arrowBtn.addEventListener("click", previousSlide);
  right_arrowBtn.addEventListener("click", nextSlide);
  nextSlide();
  setInterval(nextSlide, 6000);
};

init();
