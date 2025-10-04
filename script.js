// ✅ script.js

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  // 📱 Ouvre / ferme le menu
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // ⚠️ ici on utilise .show pour correspondre au CSS
    burger.classList.toggle("open");
  });

  // 🚀 Ferme automatiquement quand on clique sur un lien (optionnel)
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      burger.classList.remove("open");
    });
  });
});
