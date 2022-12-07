//спливающе меню
const menuBtn = document.querySelector('.menu-btn'),
nav1 = document.querySelector('.nav1');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  nav1.classList.toggle('active');
})
//закін спливающого меню

//початок форми
//константи для появи форми бронювання
const ordeCont = document.querySelector('.order-content'),
headerBtn = document.querySelector('.header-btn'),
offersBtn = document.querySelector('.offers-btn'),
navReserv = document.querySelector('.nav-reserv'),      
opacity = document.querySelector('.black_opacity'),
closeOrder = document.querySelector('.close-order');


//кнопка в шапці для появи форми
headerBtn.addEventListener('click', function() {
  ordeCont.classList.toggle('active1');
  headerBtn.classList.toggle('active1');
  opacity.classList.toggle('active1');
})
//кнопка в офер блоці для появи форми
offersBtn.addEventListener('click', function() {
  ordeCont.classList.toggle('active1');
  headerBtn.classList.toggle('active1');
  opacity.classList.toggle('active1');
})
//кнопка в шапці(навігац блок) для появи форми
navReserv.addEventListener('click', function() {
  ordeCont.classList.toggle('active1');
  headerBtn.classList.toggle('active1');
  opacity.classList.toggle('active1');
})
//закриття форми
closeOrder.addEventListener('click', function() {
    ordeCont.classList.toggle('active1');
    opacity.classList.toggle('active1');
})
//кінець форми


//початок скролу по сторінці

//функ для скролу від офер блока до форми
offersBtn.addEventListener('click', function() {
  ordeCont.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})


//константи для скролу від шапки до  історії блоку
const historyBlock = document.querySelector('.history-block'),
navInfo = document.querySelector('.nav-info');
//функція для скролу від шапки до історії блоку
navInfo.addEventListener('click', function() {
  historyBlock.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})


//константи для скролу від кнопки меню в заголвку сайту до блоку меню
const menuBlock = document.querySelector('.menu-block'),
btnSuptitle = document.querySelector('.btn-suptitle');
//функція для скролу від кнопки меню в заголвку сайту до блоку меню
btnSuptitle.addEventListener('click', function() {
  menuBlock.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})


//константи для скролу від кнопки в шапці(навігац блок) до блоку меню
const navMenu = document.querySelector('.nav-menu');
//функція для скролу від кнопки в шапці(навігац блок) до блоку меню
navMenu.addEventListener('click', function() {
  menuBlock.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})


//константи для скролу від кнопки в шапці(навігац блок) до блоку голв меню
const navGol = document.querySelector('.nav-gol'),
dishesBlock = document.querySelector('.dishes-block');
//функція для скролу від кнопки в шапці(навігац блок) до блоку голв меню
navGol.addEventListener('click', function() {
  dishesBlock.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

const arrowTop = document.getElementById("arrowTop");
arrowTop.onclick = function() {
      window.scrollTo({
    top: -pageYOffset,
    behavior: 'smooth',
  })
    };

    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });










