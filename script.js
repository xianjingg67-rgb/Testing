// --- ANIMASI MENGETIK NAMA ---
const textToType = "Lukman Al Khakim";
let i = 0;
let deleting = false;

function playTyping() {
    const target = document.getElementById("typing");
    if (!target) return;

    if (!deleting) {
        target.innerHTML = textToType.slice(0, i + 1);
        i++;
    } else {
        target.innerHTML = textToType.slice(0, i - 1);
        i--;
    }

    if (i === textToType.length) {
        deleting = true;
        setTimeout(playTyping, 2000); // Jeda saat nama lengkap
    } else if (i === 0) {
        deleting = false;
        setTimeout(playTyping, 500);
    } else {
        setTimeout(playTyping, deleting ? 100 : 150);
    }
}

// --- ANIMASI SCROLL REVEAL ---
function revealSections() {
    const sections = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('active');
        }
    });
}

// --- INISIALISASI ---
document.addEventListener("DOMContentLoaded", () => {
    playTyping();
    revealSections(); // Cek posisi saat pertama kali muat
    window.addEventListener('scroll', revealSections);
});

