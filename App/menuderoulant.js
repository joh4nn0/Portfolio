document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const btn = dropdown.querySelector(".dropdown-btn");
    const box = dropdown.querySelector(".dropdown-menu");

    if (!btn || !box) {
        console.error("❌ Impossible de trouver le bouton ou le menu !");
        return;
    }

    btn.addEventListener("click", () => {
        box.classList.toggle("show");
    });
});