//hamburger menu
const iconMenu = document.querySelector('.menu__icon');
const header = document.querySelector('.header')
if (iconMenu) {
   const menuList = document.querySelector('.header__nav');
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_activete');
      menuList.classList.toggle('_activete');
      header.classList.toggle('_activete')
   })
}