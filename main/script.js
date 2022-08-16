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
         const gotoBlockValue = goToBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

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

//slider

// const slides = document.querySelectorAll('.slide'),
//    dots = document.querySelectorAll('.dot');

// let index = 0;

// const activeSlide = n => {
//    for (slide of slides) {
//       slide.classList.remove('active');
//    }
//    slides[n].classList.add('active');
// }

// const activeDot = n => {
//    for (dot of dots) {
//       dot.classList.remove('active');
//    }
//    dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//    activeSlide(index);
//    activeDot(index);
// }

// const nextslide = () => {
//    if (index == slides.length - 1) {
//       index = 0;
//       prepareCurrentSlide(index);
//    } else {
//       index++;
//       prepareCurrentSlide(index);
//    }
// }

// const prevslide = () => {
//    if (index == 0) {
//       index = slides.length - 1;
//       prepareCurrentSlide(index);
//    } else {
//       index--;
//       prepareCurrentSlide(index);
//    }

// }

// dots.forEach((item, indexDot) => {
//    item.addEventListener('click', () => {
//       index = indexDot;
//       prepareCurrentSlide(index);
//    })
// })

// window.setInterval(nextslide, 9000);

//Contact Modal

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
   window.scrollbars({
      behavior: "smooth"
   })
})
