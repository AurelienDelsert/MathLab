// =============================
// 🌌 Parallaxe 3D Mathématique
// =============================

document.addEventListener("mousemove", (e) => {
  const layer = document.getElementById("math-layer");
  if (!layer) return;

  // Calcul de l'effet en fonction de la position de la souris
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // amplitude max 20px
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  // Applique une translation douce
  layer.style.transform = `translate(${x}px, ${y}px)`;
});

// ✅ Effet réactif au redimensionnement
window.addEventListener("resize", () => {
  const layer = document.getElementById("math-layer");
  if (layer) {
    layer.style.transform = `translate(0, 0)`;
  }
});
