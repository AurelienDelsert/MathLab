// ✅ script.js - Navigation responsive & sous-menu mobile

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");
  const dropBtns = document.querySelectorAll(".dropbtn");

  // Vérification de base
  if (!burger || !navLinks) {
    console.error("❌ Éléments navbar introuvables (#burger ou #nav-links)");
    return;
  }

  console.log("✅ JS chargé correctement !");

  /* ================================
     🍔 Menu burger (mobile)
  ================================== */
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("open");
  });

  /* ================================
     🔽 Sous-menus (iPhone & mobile)
  ================================== */
  dropBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Empêche la redirection immédiate
      e.preventDefault();

      const dropdownContent = btn.nextElementSibling;

      // Fermer les autres sous-menus si un autre est ouvert
      document.querySelectorAll(".dropdown-content").forEach((menu) => {
        if (menu !== dropdownContent) {
          menu.classList.remove("show");
        }
      });

      // Bascule l'affichage de celui cliqué
      dropdownContent.classList.toggle("show");
    });
  });

  /* ================================
     ❌ Fermer le sous-menu si clic en dehors
  ================================== */
  document.addEventListener("click", (e) => {
    let clickInsideDropdown = false;

    dropdowns.forEach((dropdown) => {
      if (dropdown.contains(e.target)) {
        clickInsideDropdown = true;
      }
    });

    if (!clickInsideDropdown) {
      document.querySelectorAll(".dropdown-content").forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });
});
