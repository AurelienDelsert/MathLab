// ✅ script.js

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  // Vérifie que les éléments existent
  if (!burger || !navLinks) {
    console.error("❌ #burger ou #nav-links introuvable");
    return;
  }

  console.log("✅ JS chargé !");

  // Ouvre/ferme le menu
  burger.addEventListener("click", () => {
    console.log("👉 Clic détecté sur burger");
    navLinks.classList.toggle("show");
  });
});

// ✅ Gérer l'ouverture du sous-menu sur mobile
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".dropdown > .dropbtn");

  dropdownToggles.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Empêche le lien de rediriger tout de suite
      e.preventDefault();

      const dropdownContent = btn.nextElementSibling;

      // Fermer tous les autres menus avant d'ouvrir celui-là
      document.querySelectorAll(".dropdown-content").forEach(menu => {
        if (menu !== dropdownContent) {
          menu.classList.remove("show");
        }
      });

      // Bascule l'ouverture du menu cliqué
      dropdownContent.classList.toggle("show");
    });
  });
});
