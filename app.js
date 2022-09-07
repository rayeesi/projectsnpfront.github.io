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