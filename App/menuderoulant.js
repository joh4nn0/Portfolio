document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const btn = dropdown.querySelector(".dropdown-btn");
    const box = dropdown.querySelector(".dropdown-menu");
    const hamBTN = document.querySelector(".menuhamburger");
    const boxham = document.querySelector(".nav-links-mobile");

    if (!btn || !box || !hamBTN || !boxham) {
        console.error("❌ Impossible de trouver le bouton ou le menu !");
        return;
    }

    btn.addEventListener("click", () => {
        box.classList.toggle("show");
    });

    hamBTN.addEventListener("click", () => {
        boxham.classList.toggle("show");
    });
});