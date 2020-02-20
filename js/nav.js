//디폴트 변수 선언 (각종 DOM 세팅)
const nav__container = document.querySelector(".nav__container");
const nav__modal = document.querySelector(".nav__modal");
const modal_overlay = document.querySelector(".modal__overlay");
const modal_cancelBtn = document.querySelector(".modal__cancel-btn");
const navbarBtn = document.querySelector(".nav__bars");
/*
    스크롤바가 최상위 위치(y좌표)에 있는지 확인하는 함수
    * 최상위 위치는 y좌표가 60이하인 경우라고 정의한다.
*/
const isScrollTop = () => {
  const { scrollY } = window;
  if (scrollY < 60) return true;
  return false;
};

// 상단 네비게이션을 커다란(Lg: large)네비바로 적용하는 함수
const showNavLg = () => {
  nav__container.classList.remove("nav-sm");
  nav__container.classList.add("nav-lg");
};

// 상단 네비게이션을 작은(Sm: small)네비바로 적용
const showNavSm = () => {
  nav__container.classList.remove("nav-lg");
  nav__container.classList.add("nav-sm");
};

// 스크롤 이벤트를 처리하는 함수
const handleScroll = e => {
  if (!isScrollTop()) showNavSm();
  else showNavLg();
};

const showModalNav = () => {
  nav__modal.classList.remove("hidden");
};

const hiddenModalNav = () => {
  nav__modal.classList.add("hidden");
};
//자바스크립트 초기 실행 함수
const navInit = () => {
  navbarBtn.addEventListener("click", showModalNav);
  modal_overlay.addEventListener("click", hiddenModalNav);
  modal_cancelBtn.addEventListener("click", hiddenModalNav);
  window.addEventListener("scroll", handleScroll);
};

//초기 실행 함수 호출
navInit();
