document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const navMenu = document.querySelector(".nav-menu");
    const menuOverlay = document.querySelector(".menu-overlay");

    // Pastikan semua elemen tersedia
    if (!menuToggle || !menuClose || !navMenu || !menuOverlay) {
        return;
    }


    // =========================
    // BUKA MENU
    // =========================

    function openMenu() {

        navMenu.classList.add("active");
        menuOverlay.classList.add("active");

        document.body.classList.add("menu-open");

        menuToggle.setAttribute("aria-expanded", "true");
    }


    // =========================
    // TUTUP MENU
    // =========================

    function closeMenu() {

        navMenu.classList.remove("active");
        menuOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
    }


    // =========================
    // KLIK HAMBURGER ☰
    // =========================

    menuToggle.addEventListener("click", function () {
        openMenu();
    });


    // =========================
    // KLIK X
    // =========================

    menuClose.addEventListener("click", function () {
        closeMenu();
    });


    // =========================
    // KLIK AREA GELAP
    // =========================

    menuOverlay.addEventListener("click", function () {
        closeMenu();
    });


    // =========================
    // KLIK LINK MENU
    // =========================

    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            closeMenu();
        });

    });


    // =========================
    // TOMBOL ESC
    // =========================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

});