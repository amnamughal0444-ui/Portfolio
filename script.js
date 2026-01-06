let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

window.onscroll = () => {
  if (menu && navbar) {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

// ✅ Typed.js
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".multiple-text", {
    strings: ["Front-End", "Developer"],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
});
