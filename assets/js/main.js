// variables
const body = document.getElementById('body')
const moonAndBurger = document.getElementById('header-buttons')
const filtersStatic = document.querySelectorAll('.filter__static')

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
        // if more than 768 then show filters by category
        filtersStatic.forEach(el => el.classList.remove('filters__hide'))
        mobileMenu.classList.remove('mobile__menu-active')
    } else {
        burgerBtn.classList.add('burger__menu-active')
        // if less than 768 then hide filters by category
        filtersStatic.forEach(el => el.classList.add('filters__hide'))
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
    if(headerTitle) {
        headerTitle.classList.add('header__buttons-hide')
    }
    moonAndBurger.classList.add('header__buttons-hide')
    body.classList.add('no-scroll');
})


// if tab on closeMenuBtn then  mobile menu close 
closeMenuBtn.addEventListener('click', () => {
    scrollUpBtn.classList.remove('scrollup-hide')
    mobileMenu.classList.remove('mobile__menu-active')
    // for hide or show headerTitle
    let screenWidth = window.screen.width;
    if(screenWidth < 380) {
        headerTitle.classList.add('header__buttons-hide')
    }
    else {
        headerTitle.classList.remove('header__buttons-hide')
    }
    moonAndBurger.classList.remove('header__buttons-hide')
    body.classList.remove('no-scroll');
})


// if tab on item of list then  mobile menu close 
mobileMenuList.forEach(e => e.addEventListener('click', () => {
    scrollUpBtn.classList.remove('scrollup-hide')
    mobileMenu.classList.remove('mobile__menu-active')
    // for hide or show headerTitle
    let screenWidth = window.screen.width;
    if(screenWidth < 380) {
        headerTitle.classList.add('header__buttons-hide')
    }
    else {
        headerTitle.classList.remove('header__buttons-hide')
    }
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




/* ======================   Filters   ========================*/ 
const filtersItems = document.querySelectorAll('.filters__list-item')
const filterLinks = document.querySelectorAll('.filters__link')
const protein = document.querySelectorAll('.protein')
const fatBurners = document.querySelectorAll('fat__burners')


// filters by product categories
filterLinks.forEach(category => {
    category.addEventListener('click', (event) => {

        if (event.target.classList.contains("protein__btn")) {
            filtersItems.forEach(el => {
                if(el.classList.contains('protein')) {
                    el.classList.remove('filters__hide');
                }
                else {
                    if(!el.classList.contains('filter__static')) {
                        el.classList.add('filters__hide');
                    }
                }
            });
        } 

        if (event.target.classList.contains("fat__burners__btn")) {
            filtersItems.forEach(el => {
                if(el.classList.contains('fat__burners')) {
                    el.classList.remove('filters__hide');
                }
                else {
                    if(!el.classList.contains('filter__static')) {

                        el.classList.add('filters__hide');
                    }
                }
            });
        } 

        if (event.target.classList.contains("gainers__btn")) {
            filtersItems.forEach(el => {
                if(el.classList.contains('gainers')) {
                    el.classList.remove('filters__hide');
                }
                else {
                    if(!el.classList.contains('filter__static')) {

                        el.classList.add('filters__hide');
                    }
                }
            });
        } 

        if (event.target.classList.contains("bca__btn")) {
            filtersItems.forEach(el => {
                if(el.classList.contains('bca')) {
                    el.classList.remove('filters__hide');
                }
                else {
                    if(!el.classList.contains('filter__static')) {

                        el.classList.add('filters__hide');
                    }
                }
            });
        } 

        if (event.target.classList.contains("creatine__btn")) {
            filtersItems.forEach(el => {
                if(el.classList.contains('creatine')) {
                    el.classList.remove('filters__hide');
                }
                else {
                    if(!el.classList.contains('filter__static')) {

                        el.classList.add('filters__hide');
                    }
                }
            });
        } 


    });
});





// if less 380px screen then headerTitle hide
const mediaQuery1 = window.matchMedia('(max-width: 380px)')
const headerTitle = document.getElementById('header-title')

function handleMediaQueryChange1(mediaQuery1) {
    if(mediaQuery1.matches) {
        headerTitle.classList.add('header__buttons-hide')
    } else {
        headerTitle.classList.remove('header__buttons-hide')
    }
}

mediaQuery1.addListener(handleMediaQueryChange1);
handleMediaQueryChange1(mediaQuery1);








// filters by manufacturers
const productItems = document.querySelectorAll('.all__products-item')

filtersItems.addEventListener('click', (btn) => {
    if(btn.target.classList.contains('protein') && btn.target.classList.contains('all__max__nutrition')) {
        productItems.forEach(item => {
            if(item.classList.contains('protein') && item.classList.contains('all__max__nutrition')) {
                item.classList.remove('header__buttons-hide')
            }
        })
    }
})




















