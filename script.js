/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuIcon.classList.remove("ri-menu-line");
        menuIcon.classList.add("ri-close-line");
    }
    else{
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-line");
    }

});

/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-line");

    });

});

/* ==========================
   HEADER SHADOW ON SCROLL
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.12)";
    } else {
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
    }

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});

/* ==========================
   FADE IN ANIMATION
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

// Stagger Effect

document.querySelectorAll(
    ".about-content,.hire-card, .skills-box, .experience-card, .timeline-item, .cert-card, .contact-card"
).forEach(el => {
    observer.observe(el);
});

document.querySelectorAll(".hire-card").forEach((card,index)=>{

    card.style.transitionDelay = `${index * 100}ms`;

});

document.querySelectorAll(".cert-card").forEach((card,index)=>{

    card.style.transitionDelay = `${index * 100}ms`;

});
