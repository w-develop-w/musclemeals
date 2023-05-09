// variables
const body = document.getElementById('body')
const moonAndBurger = document.getElementById('header-buttons')
const filtersStatic = document.querySelectorAll('.filter__static')
const mobileMenu = document.getElementById('mobile-menu') 

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


// if 768 then hide the burger button
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
const allProductsItem = document.querySelectorAll('.all__products-item')

const protein = document.querySelectorAll('.protein')
const creatine = document.querySelectorAll('.creatine')

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

            // when user click on button 'protein' will show all cards with class creatine
            allProductsItem.forEach(item => {
                if(!item.classList.contains('protein')) {
                    item.classList.add('all__products__item-hide')
                }
                else {
                    item.classList.remove('all__products__item-hide')
                }
            })
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

                // when user click on button 'creatine' will show all cards with class creatine
                allProductsItem.forEach(item => {
                    if(!item.classList.contains('creatine')) {
                        item.classList.add('all__products__item-hide')
                    }
                    else {
                        item.classList.remove('all__products__item-hide')
                    }
                })
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

                
                // when user click on button 'bca' will show all cards with class creatine
                allProductsItem.forEach(item => {
                    if(!item.classList.contains('bca')) {
                        item.classList.add('all__products__item-hide')
                    }
                    else {
                        item.classList.remove('all__products__item-hide')
                    }
                })
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

filtersItems.forEach(item => {
    item.addEventListener('click', (btn) => {
        
        
        
        // PROTEIN FILTRATION
        // all__max__nutrition filtration
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('all__max__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Allmax Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // bio__tech__usa filtration
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('bio__tech__usa')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('BioTechUSA')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // bsn filtration
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('bsn')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('BSN  Syntha')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // dymatize-nutrition  filtration 
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('dymatize__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Dymatize Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // kevin-levrone  filtration 
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('kevin-levrone')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Kevin Levrone')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }
        
        // my__protein filtration 
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('my__protein')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Myprotein')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }
        
        // optium__nutrition filtration 
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('optium__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('OptimunNutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // scitec-nutrition filtration 
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('scitec-nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Scitec Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // syntrax filtration 
        if(btn.target.classList.contains('protein') && btn.target.classList.contains('syntrax')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Syntrax')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }





        // CREATINE FILTRATION 
        // activelab filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('activelab')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Activelab')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }
        
        // activeway__nutrition filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('activeway__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('ActiveWay Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }
        
        // biotech__usa filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('biotech__usa')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('BioTech USA')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }


        // bpi__sport filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('bpi__sport')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('BPI Sport')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }


        // kevin__levrone filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('kevin__levrone')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Kevin  Levrone')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // olimp filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('olimp')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Olimp   ')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // optimum__nutrition filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('optimum__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Optimum Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // ostro__vit filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('ostro__vit')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('OstroVit')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // rule1 filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('rule1')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Rule1')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // scitec__nutrition filtration 
        if(btn.target.classList.contains('creatine') && btn.target.classList.contains('scitec__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Scitec  Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }











        // BCA FILTRATION 

        // active__lab filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('active__lab')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('ActiveLab')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // blade__sport filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('blade__sport')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('BladeSport')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // bsn filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('bsn')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('BSN Amino')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // ironflex filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('ironflex')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Ironflex')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // kevin__levrone filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('kevin__levrone')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Kevin   Levrone')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // olimp filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('olimp')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Olimp Xplode') && !el.textContent.includes('Olimp Mega Caps')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // optimum__nutrition filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('optimum__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Optimum   Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // scitec__nutrition filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('scitec__nutrition')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Scitec   Nutrition')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // scivation filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('scivation')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Scivation')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }

        // zoomad__labs filtration 
        if(btn.target.classList.contains('bca') && btn.target.classList.contains('zoomad__labs')) {
            productItems.forEach(el => {
                if (!el.textContent.includes('Zoomad Labs')) {
                    el.classList.add('all__products__item-hide');
                }
                else {
                    el.classList.remove('all__products__item-hide');
                }
            })
        }
    })
})





// =========================== MODAL ============================================
// Show modal window
// const modal = document.getElementById('modal')
// const modalImage = modal.querySelector('.modal-image')
// let modalTitle = modal.querySelector('.product-title').textContent

// allProductsItem.forEach(item => {
//     item.addEventListener('click', (event) => {
//         event.preventDefault()
//         if (event.target) {
//             modal.classList.add('modal-active')
//             let imageUrl = item.querySelector('img').src
//             modalImage.src = imageUrl

//             let title = item.querySelector('.modal-title').textContent
//             modalTitle.textContent = title 


//         }
//     })
// })


const modal = document.getElementById('modal')
const modalImage = modal.querySelector('.modal-image')
const modalTitle = modal.querySelector('.modal-title')
const modalDescription = modal.querySelector('.modal__description')

allProductsItem.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
  
    if (event.target && item.classList.contains('protein') && item.classList.contains('all__max__nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Casein-FX™/HexaPro/Isoflex has the perfect combination of 100% pure micellar casein and calcium caseinate, which together provide up to 7 hours of protein digestion! Those. during a nights sleep, you are reliably protected from destructive processes (splitting of muscle tissue) and, moreover, stimulate growth and recovery speed."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('bio__tech__usa')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "BioTech (USA) Iso Whey Zero is a whey protein isolate from a world famous brand, maximally purified from impurities by cold microfiltration. The product is ideal for everyone who leads a healthy lifestyle and plays sports, including professional bodybuilders. Thanks to protein, anyone can increase muscle gain and minimize catabolic losses. This is possible due to the presence in the composition of an effective amino acid profile that nourishes muscle fibers and stimulates the anabolic process."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('bsn')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "BSN Syntha-6 Edge is an innovative protein based on 4 types of protein: milk, whey, micellar and casein. Whey protein has the highest absorption rate. The speed of its assimilation is extremely high: from 20 to 40 minutes, depending on the form (concentrate, hydrolyzate, isolate). Milk protein is more resistant to the action of enzymes and is digested in about 40-60 minutes. The longest absorption period is characterized by slow proteins: micellar casein and calcium caseinate. They complement each other favorably and as part of Syntha-6 Edge form a single matrix with a complex anabolic effect."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('dymatize__nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Dymatize Elite Whey - 'Star' composition. Includes a blend of fast-acting whey protein isolates, ion-exchange whey protein concentrates and peptides. This makes the product instantly digestible and giving instant results. You will feel it literally from the first workout. What else.Elite Whey is highly enriched with amino acids (the main building blocks of muscles) and has a high protein efficiency ratio (according to the Protein Efficiency Rating). The mixture contains a high percentage of glutamine. It is he who ensures the balance of muscle proteins, plays a crucial role in protein synthesis and strengthens the human immune system. This is critical during heavy workloads."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('kevin__levrone')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Kevin Levrone Gold Whey is a whey protein from the new gold product line from bodybuilding legend Kevin Levrone. Kevin Levrone already has several separate product lines under the names Silver Line, Black Line and Unique Line. They have already won the trust and love of their customers both in the European market and beyond. For 2020, the brand introduces an all-new series - Gold, a comprehensive collection of 11 different supplements that are distinguished by premium quality and unrivaled performance. The protein from this series surprised everyone with its extremely good tastes, perfect solubility and excellent digestibility."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('my__protein')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Myprotein Impact Whey Protein (Импакт Вей Протеин Май Протеин) – это белковая добавка на основе неденатурированного концентрата сывороточного протеина с высоким содержанием белка (82%).Наш бестселлер Impact Whey Protein® изготавливается из высококачественного концентрата сывороточного белка, и содержит более 20г белка в каждой порции. Комплексный профиль аминокислот данного продукта, с содержанием более 2гр лейцина в порции, обеспечит вас всеми незаменимыми аминокислотами (EEA). Если вы ищете протеин высочайшего качества, с исключительным соотношением качества и цены и великолепным вкусом - то это то, что вам нужно.Мы гордимся тем, что можем предложить вам протеиновые коктейли с широким ассортиментом вкусов. Вы можете выбрать классические вкусы, такие как шоколад или ваниль, а также новые вкусы, такие как тирамису, ревень с заварным кремом и лимонный чизкейк."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('optium__nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Protein is a mixture of amino acids that make up your muscles.During exercise, muscles require high-quality protein replenishment for regeneration, recovery and growth. 100% Whey Gold Standard is exactly the protein source you need!Most people don't even realize they're not getting their daily protein intake. Gold Standard helps to compensate for this deficiency and promotes a set of lean muscle mass."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('scitec-nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "100% Whey Protein Professional is a high quality ultra-isolated whey protein concentrate and whey isolate.Whey protein is considered the best among all types of protein in bodybuilding, since its biological value is the highest. Whey protein has a huge amino acid composition and a very high concentration of BCAAs (isoleucine, leucine, valine) compared to other protein sources. The amino acid profile of this protein is excellent. The so-called “anabolic amino acids” (BCAA, arginine, glutamine) are also added to its composition.100% Whey Protein Professional consists of 10% microfractions of immunoglobulin protein, which supports the body's immune system."
    }   

    if (event.target && item.classList.contains('protein') && item.classList.contains('syntrax')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Problem: Plain packaging of poor quality protein, containing maltodextrin, which promotes fat loss, tastes terrible, requires a blender to dissolve the protein, and, in addition, contains only one 'fast' protein. No doubt most of these packs are cheap, but who wants to take a supplement day after day that is as inconvenient as it is useless?"
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('activelab')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Activlab Creatine Beta Alanine is a unique complex containing creatine monohydrate and beta-alanine. These two substances individually perfectly improve the athletic performance of athletes, and acting in combination, they enhance mutual influence. With this supplement, your strength and endurance will improve many times over, which will positively affect the quality of training.  Activlab Creatine Beta Alanine is a unique complex containing creatine monohydrate and beta-alanine. These two substances individually perfectly improve the athletic performance of athletes, and acting in combination, they enhance mutual influence. With this supplement, your strength and endurance will improve many times over, which will positively affect the quality of training.You can buy Activlab Creatine Beta Alanine in Kyiv at a bargain price in our online store of sports nutrition and accessories Fitness Shop. To do this, you need to add the product to the cart, and fill in several fields of the order form. If you do not have time or opportunity to fill out the form, use the quick order button. In addition, you can get an initial consultation via online chat or by phone. We deliver sports nutrition in Kyiv and throughout the country in a short time."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('activeway__nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "ActiWay Micro Creatine is the most common form of creatine monohydrate. The purest product that has undergone a micronization process (high degree of grinding). Extra fine powder - creatine particle size is 200 mesh (= 0.074 mm). Thanks to this, creatine passes through the intestinal walls more easily, does not irritate the mucous membrane, is absorbed faster, and therefore reaches its goal faster. Natural and 100% purified product, does not contain any impurities or additives. Increases muscle activity and overall endurance of the body. One of the main obvious advantages of this product is its cost. With ActiWay Nutrition, a young company in the European market, you do not overpay for the brand, for advertising and for the name of the product."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('biotech__usa')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "BioTechUSA Crea Zero is a working creatine complex from a well-known manufacturer of sports nutrition. Supplement 4 contains the most effective forms of creatine supplemented with vitamin B6. Biotech USA Crea Zero is suitable for athletes of all skill levels.BiotechUSA Crea Zero properties: *Has a pumping effect.Increases endurance.*Improves strength characteristics.*Helps in muscle recruitment.*Increases ATP levels.*Increases the effectiveness of training.*BiotechUSA Crea Zero is a creatine matrix based on creatine monohydrate, creatine citrate and others. *The supplement does not cause side effects if you follow the instructions for use. *Biotech USA has long established itself as a high-quality and reliable manufacturer of sports goods, which has been giving us the opportunity to use 100% working supplements for more than one year."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('bpi__sport')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "MICRONIZED CREATINE by BPI, highly purified creatine monohydrate from an American company. What does MICRONIZED mean? It is 100% pure creatine that has been micronized by reducing large creatine molecules.Why is micronized creatine better? *maximum degree of assimilation  *significantly stronger effect compared to standard creatine *minimization of side effects in the form of non-perception from the gastrointestinal tract *completely dissolves in any drink."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('kevin__levrone')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "LevroCREA is a nutritional supplement designed for athletes, people who regularly play sports or have an active lifestyle, and people during periods of intense physical exertion. Each serving of the drug contains up to 7 g of creatine in four different forms: creatine hydrochloride, tri-creatine malate, creatine nitrate and creatine monohydrate. The combination of different forms of creatine allows the body to obtain the necessary creatine in different ways and at different rates, increasing the overall effectiveness of the drug.Creatine improves physical performance with consistent performance of short, high-intensity exercise. The positive effect is already noticeable when taking 3 g of creatine per day."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('olimp')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Creatine monohydrate powder Olimp is a high quality creatine monohydrate powder. Creatine monohydrate powder Olimp is essential for high performance athletes. It provides replenishment of phosphocreatine reserves in muscles - a derivative for the synthesis of ATP - the main energy source of muscle cells.In other words, the higher the concentration of creatine in the body, the more intensively it produces ATP molecules. As a result, muscle strength and endurance increase. Creatine monohydrate powder Olimp increases the athlete's performance, you can train harder, lift more weight - this will accelerate the growth of muscle mass."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('optimum__nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Optimum Nutrition Creatine Powder - 100% pure creatine monohydrate powder - the highest quality product. The action of the drug is to optimize the energy processes occurring in muscle tissues. Creatine promotes the accumulation of ATP, thereby increasing the body's endurance during physical activity. Optimum Nutrition Creatine Powder is pure creatine monohydrate in powder form. Does not contain various impurities or other ineffective compounds. This creatine complex is one of Optimum Nutrition's most famous and frequently purchased supplements. The main function of creatine in the body is to improve the energy characteristics of muscle cells, which inevitably leads to an increase in strength and endurance. Many amateurs and professionals cannot imagine the training process without such an additive. Its reception noticeably accelerates the receipt of results and at the same time does not have negative or other fictional effects. Creatine is actively produced by the body, but this is not enough for heavy strength training."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('ostro__vit')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "Creatine Monohydrate by Ostrovit, one of the most common forms of creatine on the market is creatine monohydrate.Creatine is a nutrient that is produced by the body and partly comes from food. Creatine is found primarily in red muscle tissue. It plays an important role in the contraction of muscle tissue, acting as an energy depot during exercise, and an increase in the supply of this substance will directly affect athletic performance."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('rule1')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, ' ')
        modalTitle.textContent = title
        modalDescription.textContent = "R1 CREATINE is Rule 1's pharmaceutical grade micronized creatine monohydrate. The main goal of this product is to restore lost ATP and creatine reserves in the shortest possible time.The composition of the product is represented by 100% pure premium quality creatine monohydrate, which, due to its micronized form, is absorbed several times faster, which in turn has a positive effect on its absorption process and overall effectiveness. It is worth noting that R1 CREATINE is obtained only from animal sources, it has no taste and smell."
    } 

    if (event.target && item.classList.contains('creatine') && item.classList.contains('scitec__nutrition')) {
        modal.classList.add('modal-active')
        let imageUrl = item.querySelector('img').src
        modalImage.src = imageUrl
        let title = item.querySelector('.product-title').textContent.replace(/<br>/g, '')
        modalTitle.textContent = title
        modalDescription.textContent = "Crea-Bomb Scitec Nutrition is a new pure creatine sports nutrition product in a complex creatine matrix that contains 6 forms of creatine. The formula is patented by Skaitek Nutrishin and provides maximum nutrition of your muscles with creatine, as a result of which indicators of strength and muscle growth increase.The strength of Crea-Bomb Scitec Nutrition is in the variety of creatine. Its not worth arguing which creatine is more effective - its better to take them all! The Crea-Bomb formula provides 'double acting' creatine compounds, in which creatine is chemically bonded to other substances that provide added functionality and performance, not just more creatine."
    } 





    
    






  })
})


// Close modal window
const closeModal = document.getElementById('modal-close')

closeModal.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.remove('modal-active')
})


















































