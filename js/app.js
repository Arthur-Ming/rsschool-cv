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


const changer = document.getElementById('theme-changer');
const html = document.documentElement;

changer.addEventListener('change', function () {
   html.toggleAttribute('data-theme-dark');
});




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
console.log(
   `- вёрстка валидная +10
- вёрстка семантическая +20
В коде страницы присутствуют семантические теги HTML5,
   aside,      +2
   figure,     +2
   figcaption, +2
   footer,     +2
   header,     +2
   main,       +2
   nav,        +2
   section,    +2
   h1,         +2
   h2          +2

- для оформления СV используются css-стили +10
- контент размещается в блоке, который горизонтально центрируется на странице.
  Фоновый цвет, если он есть, тянется во всю ширину страницы +10
- вёрстка адаптивная:  +10
- есть адаптивное бургер-меню.
  Ссылки в пунктах меню ведут на основные разделы CV.
  При кликах по пунктам меню реализована плавная прокрутка по якорям.
  При уменьшении ширины экрана меню становится адаптивным. +10
- на странице СV присутствует изображение - фото или аватарка автора CV,
  пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
- контакты для связи и перечень навыков оформлены в виде списка ul > li +10
- CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
- CV содержит пример кода с подсветкой. +10
- CV содержит изображения-ссылки на выполненные проекты.
  При клике по изображению страница проекта открывается в новой вкладке.
  У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
- CV выполнено на английском языке +10
- выполнены требования к Pull Request:
   есть ссылка на задание, скриншот страницы СV,
   ссылка на деплой страницы CV на GitHub Pages,
    выполнена самооценка +10
- дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию  +10

Итого: 150`
)










