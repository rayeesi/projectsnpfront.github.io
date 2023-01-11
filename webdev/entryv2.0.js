"use strict";

// ################## //
// Navbar toggle start
// Navbar js
// inspired by kewinpowells & webdevsimplified tutorial
const primaryNav = document.querySelector(".primary-nav");
const hamburgerToggler = document.querySelector(".hamburger-button");
const primaryNavBackdrop = document.querySelector(".primary-nav-backdrop");

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
document.addEventListener("click", (event) => {
  const isClickInside = primaryNav.contains(event.target);

  if (!isClickInside) {
    // The click was OUTSIDE the specifiedElement, do something
    const visibility = primaryNav.getAttribute("data-visible");

    if (event.target.matches(".hamburger-button")) {
      //console.log("Hamberger");
      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        hamburgerToggler.setAttribute("aria-expanded", "true");
        primaryNavBackdrop.setAttribute("data-backdrop-visible", "true");
      } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        hamburgerToggler.setAttribute("aria-expanded", "false");
        primaryNavBackdrop.setAttribute("data-backdrop-visible", "false");
      }
    } else {
      //console.log(visibility);
      if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        hamburgerToggler.setAttribute("aria-expanded", "false");
        primaryNavBackdrop.setAttribute("data-backdrop-visible", "false");
      }
    }
  }
});
//Navbar Toggler with clickoutside ends

// Navbar toggle ends

// ################## //
//  Dropdown Menu //
// inspired by webdevsimplified tutorial
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-toggle]");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  console.log(isDropdownButton);

  let currentDropdown;
  if (isDropdownButton) {
    console.log("isdrop");
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropDown) => {
    if (dropDown === currentDropdown) return;
    dropDown.classList.remove("active");
  });
});
