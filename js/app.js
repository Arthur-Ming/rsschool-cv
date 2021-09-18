function getCoords(elem) {
   let box = elem.getBoundingClientRect();

   return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
   }
}

document.querySelector('.nav').onclick = function (event) {

   const target = event.target.closest('.nav__item');

   if (!target) return

   event.preventDefault();

   const href = target.getAttribute('href');
   const scrollTarget = document.querySelector(href);

   const header = document.querySelector('.header').clientHeight
   const offSetY = getCoords(scrollTarget)
   const clientWidth = document.documentElement.clientWidth;

   window.scrollTo({
      top: clientWidth > 767.98 ? offSetY.top : offSetY.top - header,
      behavior: 'smooth'
   })
}



//Menu
let unlock = true;
let iconMenu = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".menu__body");
let br = 767.98;

iconMenu.addEventListener("click", function (e) {
   let delay = 300;
   if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
   }
});

menuBody.addEventListener("click", function (e) {
   if (document.documentElement.clientWidth > br) return;

   let target = e.target.closest('.nav__item');

   if (!target) return;
   let delay = 300;
   menuBody.classList.remove("_active");
   iconMenu.classList.remove("_active");
   //document.querySelector("body").classList.remove("_lock")
   body_lock(delay);


})

window.addEventListener("resize", () => {
   if (!menuBody.classList.contains("_active")) return;
   if (document.documentElement.clientWidth > br) {
      body_lock_remove(0);
      menuBody.classList.remove("_active");
      iconMenu.classList.remove("_active");
   }
   else {
      body_lock_add(0);
   }

});

//=================
//BodyLock
function body_lock(delay) {
   let body = document.querySelector("body");
   if (body.classList.contains('_lock')) {
      body_lock_remove(delay);
   } else {
      body_lock_add(delay);
   }
}
function body_lock_remove(delay) {
   let body = document.querySelector("body");
   if (unlock) {
      let lock_padding = document.querySelectorAll("._lp");
      setTimeout(() => {
         for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = '0px';
         }
         body.style.paddingRight = '0px';
         body.classList.remove("_lock");
      }, delay);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, delay);
   }
}
function body_lock_add(delay) {
   let body = document.querySelector("body");
   if (unlock) {
      let lock_padding = document.querySelectorAll("._lp");
      for (let index = 0; index < lock_padding.length; index++) {
         const el = lock_padding[index];
         el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }
      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add("_lock");

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, delay);
   }
}









