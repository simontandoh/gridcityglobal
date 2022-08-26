// Select HTML Elements
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");

// Handles Mobile Navigation Bar
const toggleMobileNav = () => {
    header.classList.toggle("open");
};

// Event Listeners
hamburger.addEventListener("click", toggleMobileNav);
