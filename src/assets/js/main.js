// Mobile menu toggle
document.querySelector(".header__menu-toggle").addEventListener("click", () => {
  const navList = document.querySelector(".header__nav-list");
  navList.classList.toggle("active");
});

// Simple animation example (plus point)
const hero = document.querySelector(".hero");
hero.style.opacity = "0";
setTimeout(() => {
  hero.style.transition = "opacity 1s ease";
  hero.style.opacity = "1";
}, 300);
