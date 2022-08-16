//hamburger menu
const iconMenu = document.querySelector('.menu__icon');
const header = document.querySelector('.header');
const menuList = document.querySelector('.header__nav');
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_activete');
      menuList.classList.toggle('_activete');
      header.classList.toggle('_activete');
   })
}

//shopingButton
const orderBtn = document.querySelector('.main__btn');
const shopSection = document.querySelector('.page__shop');
orderBtn.addEventListener('click', () => {
   shopSection.scrollIntoView({ block: "center", behavior: "smooth" });

})

//scrolling

const menuLinks = document.querySelectorAll('.link-header[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const goToBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = goToBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__body').offsetHeight;

         if (iconMenu.classList.contains('_activete')) {
            document.body.classList.remove('_lock')
            iconMenu.classList.remove('_activete');
            menuList.classList.remove('_activete');
            header.classList.remove('_activete');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

//Contact window

const footerBtn = document.querySelector('.footer__btn');
const sectionWrapper = document.querySelector('.section__wrapper');
const footerArrow = document.querySelector('.footer__arrow');
footerBtn.addEventListener('click', () => {

   footerArrow.classList.toggle('rotate');


   if (sectionWrapper.clientHeight === 150) {
      sectionWrapper.style.height = "251px";
   } else {
      sectionWrapper.style.height = "150px";
   }
})



