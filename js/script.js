const mobileMenuButton = document.querySelector('.mobile-nav-open');

const mobileMenu = document.querySelector('.mobile-nav-list');

const mainHeader = document.querySelector('.main-header');

function switchButtonIcon() {
  const icon = mobileMenuButton.firstElementChild;
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
}
mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active-menu');
  switchButtonIcon();
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    mainHeader.classList.add('on-scroll');
  } else {
    mainHeader.classList.remove('on-scroll');
  }
});
