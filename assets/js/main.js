/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// if 1024 then hide the burger button
const mediaQuery = window.matchMedia('(min-width: 1024px)');
const burgerBtn = document.getElementById('burger-menu')

function burgerHide() {
    if(mediaQuery.matches) {
        burgerBtn.classList.remove('burger__menu-active')

        // if user open mobile menu and skreen does more than 1024 then mobile menu will close
        mobileMenu.classList.remove('mobile__menu-active')
        moonAndBurger.classList.remove('header__buttons-hide')
    } else {
        burgerBtn.classList.add('burger__menu-active')
    }
}

setInterval(burgerHide, 10) 




/* ===============  MOBILE MENU ================= */
const mobileMenu = document.getElementById('mobile-menu') 
const body = document.getElementById('body')
const closeMenuBtn = document.getElementById('mobile-close-btn')
const mobileMenuList = document.querySelectorAll('.mobile__menu-item')
const moonAndBurger = document.getElementById('header-buttons')

// if tab on burgerBtn then  mobile menu open 
burgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.add('mobile__menu-active')
    moonAndBurger.classList.add('header__buttons-hide')
    body.classList.add('no-scroll');
    // body.classList.add('body__blur')
})


// if tab on closeMenuBtn then  mobile menu close 
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile__menu-active')
    moonAndBurger.classList.remove('header__buttons-hide')
    body.classList.remove('no-scroll');
})


// if tab on item of list then  mobile menu close 
mobileMenuList.forEach(e => e.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile__menu-active')
    moonAndBurger.classList.remove('header__buttons-hide')
    body.classList.remove('no-scroll');
}))




// for blur when the user scrolls through the site
window.addEventListener('scroll', function() {
    const header = document.querySelector('#header');
    const scrollPosition = window.pageYOffset;
  
    if (scrollPosition > 100) { 
      header.classList.add('header--blur');
    } else {
      header.classList.remove('header--blur');
    }
});





/* ================  SECTION IMPORTANT INFO =================== */
const infoList = document.querySelector('.important__info__list');
const infoItems = infoList.querySelectorAll('.important__info__list-item');
let currentItem = 0;

// for change information   
function changeInfo() {
  infoItems[currentItem].classList.remove('showing');
  currentItem = (currentItem + 1) % infoItems.length;
  infoItems[currentItem].classList.add('showing');
}

setInterval(changeInfo, 3000);





const burgerMenu = document.getElementById('burger-menu');

burgerMenu.addEventListener('click', () => {
  body.classList.add('no-scroll');
});




