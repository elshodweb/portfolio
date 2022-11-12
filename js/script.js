const body = document.querySelector('body');
const modalWindow = document.querySelector(".modal");


const menuIcon = document.querySelector(".menu__icon");

if (menuIcon) {
   menuIcon.addEventListener("click", function (e) {
      menuIcon.classList.toggle("active");
      document.querySelector(".menu__nav").classList.toggle("open");
      if (menuIcon.classList.contains("active")) {
         body.classList.add("lock");
         clickLinck();
      } else {
         body.classList.remove("lock");
      }
   })
}
function clickLinck() {
   const menuSection = document.querySelectorAll(".menu__link");
   if (menuSection.length > 0) {
      for (let index = 0; index < menuSection.length; index++) {
         const link = menuSection[index];
         link.addEventListener("click", function (e) {
            menuIcon.classList.remove("active");
            document.querySelector(".menu__nav").classList.remove("open");
            body.classList.remove("lock");
            e.preventDefault();
         })
      }
   }

}
body.addEventListener(
   "click",
   function (event) {
      if (event.target.closest(".modal-open")) {
         paddingLockFun();
         modalWindow.classList.add("active");
         body.classList.add("lock");
         if (modalWindow.classList.contains("active")) {
            KeyboardClose();
            eventClose();
         }
      }
   }
)

function eventClose() {
   const modalClose = document.querySelectorAll('.modal-close');
   if (modalClose.length > 0) {
      for (let index = 0; index < modalClose.length; index++) {
         const el = modalClose[index];
         el.addEventListener("click", function (e) {
            closeFunction();
            paddingUnLockFun();
            e.preventDefault();
         });
      }
   }
}

function closeFunction(e) {
   modalWindow.classList.remove("active");
   body.classList.remove("lock");
}

function KeyboardClose() {
   addEventListener("keydown", function (e) {
      if ((e.code === "Escape") || (e.code === "Space")) {
         closeFunction();
      }
   })
}

function paddingLockFun() {
   const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
   const paddingLock = document.querySelectorAll(".padding-lock");
   if (paddingLock.length > 0) {
      for (let index = 0; index < paddingLock.length; index++) {

         paddingLock[index].style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
}
function paddingUnLockFun() {
   const paddingLock = document.querySelectorAll(".padding-lock");
   if (paddingLock.length > 0) {
      for (let index = 0; index < paddingLock.length; index++) {
         paddingLock[index].style.paddingRight = '0px';
      }
   }
   body.style.paddingRight = '0px';
}


//--------slider----------


// import styles bundle

new Swiper('.swiper', {
   // Optional parameters
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },

   simulateTouch: true,
   // Navigation arrows

   // управления с клавиатурой
   keyboard: {
      // вкл/выкл
      enable: true,
      // вкл/выкл
      // только когда слайдер скролено в экран
      onlyInViewport: true,
      // вкл/выкл
      // управлени с клав pageup pagedown
      pageUpDown: true,
   },

   // автопрокрутка 
   autoplay: {
      // пауза между прокруткой
      delay: 3000,
      // закончить на последной слайде
      stopOnLastSlide: false,
      // откючить после ручного перключения
      disableOnInteraction: false,
   },

   speed: 800, 

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});