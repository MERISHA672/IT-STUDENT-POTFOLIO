const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");


// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close mobile menu when link is clicked

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= DARK / LIGHT MODE =================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


// Remember selected theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.querySelector("i").classList.remove("fa-moon");

    themeToggle.querySelector("i").classList.add("fa-sun");

}


// ================= CONTACT FORM =================

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.innerHTML =
        'Message Sent <i class="fas fa-check"></i>';

    button.style.background = "#16a34a";

    contactForm.reset();

    setTimeout(() => {

        button.innerHTML =
            'Send Message <i class="fas fa-paper-plane"></i>';

        button.style.background = "";

    }, 3000);

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll("nav a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});
