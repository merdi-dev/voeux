const messages = [
    "Bonne année à la femme la plus incroyable que je connaisse. J'espère que 2025 nous réserve de beaux moments... peut-être même plus que d'habitude ?",
    "Cette année, mon plus beau souhait serait de découvrir un autre côté de toi. Bonne année 🎉🎊😘... ou peut-être plus ?",
    "Ton sourire illumine mes journées, mes voeux de bonheur 🙌🎊",
    "Je te souhaite une année remplie de bonheur, d'amour... et qui sait, peut-être que la personne parfaite pour toi est plus proche que tu ne le penses..😊🎇🎆",
];

function changerMessage() {
    const messageElement = document.querySelector('.more-wish-text');
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}

const btn = document.getElementById("more-wish-btn")
btn.addEventListener("click", () => changerMessage());

// Ajouter un bouton pour changer le message
// Sélection des éléments
const showWishBtn = document.getElementById("showWishBtn");
const wishBox = document.getElementById("wishBox");

// Action au clic sur le bouton
showWishBtn.addEventListener("click", () => {
    wishBox.classList.toggle("hidden"); // Affiche ou cache le message
    if (!wishBox.classList.contains("hidden")) {
        showWishBtn.textContent = "Masquer le message";
        lancerConfettis(); // Lance les particules
    } else {
        showWishBtn.textContent = "Révéler mon message";
    }
});

// Fonction pour créer des confettis simples
function lancerConfettis() {
    const container = document.getElementById("particles-container");

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Position et couleur aléatoires
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = couleursAleatoires();

        // Animation
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

        container.appendChild(confetti);

        // Supprimer après animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Génère une couleur aléatoire
function couleursAleatoires() {
    const couleurs = ["#ff4d6d", "#ffd93d", "#6bcf63", "#4d96ff", "#ff914d"];
    return couleurs[Math.floor(Math.random() * couleurs.length)];
}

function creerCoeurs() {
    const container = document.getElementById("particles-container");

    for (let i = 0; i < 200; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️🎊";
        heart.classList.add("heart");

        // Position aléatoire
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 5 + "s";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        container.appendChild(heart);
    }
}

// LECTURE AUDIO
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');
const audio5 = document.getElementById('audio5');
const musicBtn = document.getElementById("musicBtn");

let currentAudio = audio1;

function playNext(current) {
    if (current === audio1) {
        currentAudio = audio2;
    } else if (current === audio2) {
        currentAudio = audio3;
    } else if (current === audio3) {
        currentAudio = audio4;
    } else if (current === audio4) {
        currentAudio = audio5;
    } else {
        currentAudio = audio1; // Retour au début
    }
    currentAudio.play();
}

// Démarre la boucle au clic sur le bouton
musicBtn.addEventListener('click', () => {
    audio1.play(); // Démarre le premier
});

// Quand un audio finit, joue le suivant
audio1.addEventListener('ended', () => playNext(audio1));
audio2.addEventListener('ended', () => playNext(audio2));
audio3.addEventListener('ended', () => playNext(audio3));
audio3.addEventListener('ended', () => playNext(audio4));
audio3.addEventListener('ended', () => playNext(audio4));

/* 
const bgMusic = document.getElementById("bgMusic");
let musicPlaying = false;

musicBtn.addEventListener("click", () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Musique";
    } else {
        bgMusic.play();
        musicBtn.textContent = "🔇 Musique";
    }
    musicPlaying = !musicPlaying;
}); */

// Appeler au chargement
window.onload = creerCoeurs;
