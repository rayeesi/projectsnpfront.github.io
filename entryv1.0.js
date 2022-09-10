'use strict';

// Navbar toggle start
// Navbar js
// inspired by kewinpowells tutorial
const primaryNav = document.querySelector('.primary-nav');
const hamburgerToggler = document.querySelector('.hamburger-button');

hamburgerToggler.addEventListener('click',() => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false'){
        primaryNav.setAttribute('data-visible','true');
        hamburgerToggler.setAttribute('aria-expanded','true');
    }else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible','false');
        hamburgerToggler.setAttribute('aria-expanded','false');
    }

    // console.log(visibility);
})

// Navbar toggle ends

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