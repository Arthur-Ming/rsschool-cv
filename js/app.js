
/* function active() {
   document.querySelector('.header__menu').classList.toggle("active");
   document.querySelector('.header__burger').classList.toggle("active");
   document.body.classList.toggle("lock");
} */

//document.querySelector('.header__burger').onclick = active;

document.querySelector('.nav').onclick = function (event) {
   event.preventDefault();
   const target = event.target.closest('.nav__item');

   if (!target) return
   const href = target.getAttribute('href');

   document.querySelector(href).scrollIntoView({ block: "start", behavior: "smooth" });
   /* 
      let href = event.target.getAttribute('href');
   
      if (href !== undefined && href !== '')
         document.querySelector(href).scrollIntoView({ block: "start", behavior: "smooth" });
   
      if (document.documentElement.clientWidth > 768) return;
   
      active(); */

};


