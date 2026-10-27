const nav = document.querySelector("nav");
let dernierScroll = window.scrollY;

window.addEventListener("scroll", () => {
    const scrollActuel = window.scrollY;

    if (scrollActuel > dernierScroll && scrollActuel > 70) {
        nav.classList.add("nav-cachee");    // scroll vers le bas : on cache
    } else {
        nav.classList.remove("nav-cachee"); // scroll vers le haut : on montre
    }

    dernierScroll = scrollActuel;
});
const formulaire = document.querySelector("#formulaire");
function afficherErreur(champ, message) {
    champ.classList.add("invalide");
    champ.nextElementSibling.textContent = message;
}

function effacerErreur(champ) {
    champ.classList.remove("invalide");
    champ.nextElementSibling.textContent = "";
}

formulaire.addEventListener("submit", (event) => {
    const nom = document.querySelector("#nom");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valide = true;

    effacerErreur(nom);
    effacerErreur(email);
    effacerErreur(message);

    if (nom.value.trim() === "") {
        afficherErreur(nom, "Please enter your name.");
        valide = false;
    }

    if (!regexEmail.test(email.value.trim())) {
        afficherErreur(email, "Please enter a valid email.");
        valide = false;
    }

    if (message.value.trim().length < 10) {
        afficherErreur(message, "Your message must be at least 10 characters.");
        valide = false;
    }

    if (!valide) {
        event.preventDefault(); 
    }
});
/* ===== Cadres des projets ===== */
const boutonsMore = document.querySelectorAll(".btn-more");
const modales = document.querySelectorAll(".modal");

function ouvrirModal(modal) {
    modal.classList.add("ouverte");
    document.body.classList.add("modal-ouverte");
}

function fermerModales() {
    modales.forEach((modal) => modal.classList.remove("ouverte"));
    document.body.classList.remove("modal-ouverte");
}

boutonsMore.forEach((bouton) => {
    bouton.addEventListener("click", () => {
        const modal = document.querySelector("#" + bouton.dataset.modal);
        ouvrirModal(modal);
    });
});

modales.forEach((modal) => {
    modal.addEventListener("click", (event) => {
        // clic sur le fond flou ou sur la croix
        if (event.target === modal || event.target.classList.contains("modal-fermer")) {
            fermerModales();
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fermerModales();
    }
});
