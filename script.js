const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.style.display = "flex";
  menuToggle.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", function () {
  navMenu.style.display = "none";
  menuToggle.style.display = "block";
  menuClose.style.display = "none";
});
