'use strict';

// Navbar toggle start
// Navbar js
// inspired by kewinpowells & webdevsimplified tutorial
const primaryNav = document.querySelector('.primary-nav');
const hamburgerToggler = document.querySelector('.hamburger-button');

// hamburgerToggler.addEventListener('click',() => {
//     const visibility = primaryNav.getAttribute('data-visible');
//     if (visibility === 'false'){
//         primaryNav.setAttribute('data-visible','true');
//         hamburgerToggler.setAttribute('aria-expanded','true');
//     }else if(visibility === 'true'){
//         primaryNav.setAttribute('data-visible','false');
//         hamburgerToggler.setAttribute('aria-expanded','false');
//     }

//     // console.log(visibility);
// })

//Navbar Toggler with clickoutside
    document.addEventListener('click', event => {
        const isClickInside = primaryNav.contains(event.target)
    
        if (!isClickInside) {
        // The click was OUTSIDE the specifiedElement, do something
            const visibility = primaryNav.getAttribute('data-visible');

            if(event.target.matches(".hamburger-button")){
                //console.log("Hamberger");
                    if (visibility === 'false'){
                        primaryNav.setAttribute('data-visible','true');
                        hamburgerToggler.setAttribute('aria-expanded','true');
                    }else if(visibility === 'true'){
                        primaryNav.setAttribute('data-visible','false');
                        hamburgerToggler.setAttribute('aria-expanded','false');
                    }
            }else{        
                
                //console.log(visibility);
                    if(visibility === 'true'){
                        primaryNav.setAttribute('data-visible','false');
                        hamburgerToggler.setAttribute('aria-expanded','false');
                    }
            }
        }
    })    
//Navbar Toggler with clickoutside ends

// Navbar toggle ends

// ############################################################### //
// search bar toggle
const searchBar = document.querySelector('.search-bar');
const toggleSearchBar = document.querySelectorAll('.toggle-search-bar');
 
toggleSearchBar.forEach(function (item) {
    item.addEventListener('click',() => {
        const searchbarvisibile = searchBar.getAttribute('data-expanded');
        if (searchbarvisibile === 'false'){
            searchBar.setAttribute('data-expanded','true');        
        }else if(searchbarvisibile === 'true'){
            searchBar.setAttribute('data-expanded','false');
            
        }  
         console.log(searchbarvisibile);  
    })
});
 



// search bar toggle