document.addEventListener('DOMContentLoaded', () => {
    // ---------------- Hamburger menu ----------------
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    if (navToggle && navLinks && navButtons) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navButtons.classList.toggle('active');
        });
    }

    // ---------------- Dropdown menu ----------------
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdown = document.querySelector('.dropdown');

    if (dropdownBtn && dropdown) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche de fermer le dropdown immédiatement
            dropdown.classList.toggle('active');
        });

        // Fermer le dropdown si clic en dehors
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
});
