const body = document.getElementById('body')
const moonAndBurger = document.getElementById('header-buttons')
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


// Reload 
const refreshLink = document.getElementById('header-logo');

refreshLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  window.location.reload();
});


// if 1024 then hide the burger button
const mediaQuery = window.matchMedia('(min-width: 768px)');
const burgerBtn = document.getElementById('burger-menu')

function handleMediaQueryChange(mediaQuery) {
    if(mediaQuery.matches) {
        burgerBtn.classList.remove('burger__menu-active')
        body.classList.remove('no-scroll'); 
        moonAndBurger.classList.remove('header__buttons-hide')
    } else {
        burgerBtn.classList.add('burger__menu-active')
    }
}
 
mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);



/* ===============  MOBILE MENU ================= */
const mobileMenu = document.getElementById('mobile-menu') 
const closeMenuBtn = document.getElementById('mobile-close-btn')
const mobileMenuList = document.querySelectorAll('.mobile__menu-item')
const scrollUpBtn = document.getElementById('scroll-up')
const header = document.getElementById('header')

// if tab on burgerBtn then  mobile menu open 
burgerBtn.addEventListener('click', (event) => {
    // header.classList.add('header-blur')
    scrollUpBtn.classList.add('scrollup-hide')
    event.preventDefault();
    mobileMenu.classList.add('mobile__menu-active')
    moonAndBurger.classList.add('header__buttons-hide')
    body.classList.add('no-scroll');
})


// if tab on closeMenuBtn then  mobile menu close 
closeMenuBtn.addEventListener('click', () => {
    scrollUpBtn.classList.remove('scrollup-hide')
    mobileMenu.classList.remove('mobile__menu-active')
    moonAndBurger.classList.remove('header__buttons-hide')
    body.classList.remove('no-scroll');
})


// if tab on item of list then  mobile menu close 
mobileMenuList.forEach(e => e.addEventListener('click', () => {
    scrollUpBtn.classList.remove('scrollup-hide')
    mobileMenu.classList.remove('mobile__menu-active')
    moonAndBurger.classList.remove('header__buttons-hide')
    body.classList.remove('no-scroll');
}))






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




// to block the scroll
const burgerMenu = document.getElementById('burger-menu');

burgerMenu.addEventListener('click', () => {
  body.classList.add('no-scroll');
});



// Filters
const proteinFilter = document.getElementById("protein");
const fatBurners = document.getElementById("fat-burners");

proteinFilter.addEventListener("click", function() {
    const filtersListItems = document.querySelectorAll(".filters__list-item");
    filtersListItems.forEach(function(item) {
        if (!item.classList.contains("protein") && !item.classList.contains("filter__static")) {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
  });
});

