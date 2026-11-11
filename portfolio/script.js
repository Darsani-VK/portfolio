/* ==========================
   Typing Animation
========================== */

const typing = document.getElementById("typing");

const words = [
    "Aspiring Data Analyst",
    "Web Developer",
    "Problem Solver",
    "2026 Fresher",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/* ==========================
   Scroll Progress Bar
========================== */

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.getElementById("progress").style.width = progress + "%";

});


/* ==========================
   Scroll Reveal Animation
========================== */

const revealElements = document.querySelectorAll(
    ".about-box,.skill-card,.edu-card,.project,.contact-box"
);

function reveal() {

    let windowHeight = window.innerHeight;

    revealElements.forEach((el) => {

        let top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/* ==========================
   Active Navigation Link
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   Floating Background Particles
========================== */

for (let i = 0; i < 25; i++) {

    let particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDelay = Math.random() * 10 + "s";

    particle.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    document.body.appendChild(particle);

}


/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


/* ==========================
   Button Ripple Effect
========================== */

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = circle.style.height =
            diameter + "px";

        circle.style.left =
            e.clientX - this.offsetLeft - diameter / 2 + "px";

        circle.style.top =
            e.clientY - this.offsetTop - diameter / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});