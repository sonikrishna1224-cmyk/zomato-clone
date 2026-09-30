// Navbar scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Typing placeholder animation
const input = document.querySelector("input");

const placeholders = [
    "Search for pizza 🍕",
    "Find burgers 🍔",
    "Search restaurants 🍽️",
    "Try delicious biryani 🍛",
    "Find cafes near you ☕"
];

let index = 0;

setInterval(() => {
    input.setAttribute("placeholder", placeholders[index]);
    index++;

    if (index >= placeholders.length) {
        index = 0;
    }
}, 2000);

// Smooth fade animation on load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});