document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animasi Muncul Saat Scroll (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.15 
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });


    // 2. Kontrol Transformasi Kelas Navbar Mengambang (Liquid Glass)
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        // Jika layar di-scroll lebih dari 40px, ubah wujud navigasi ke mode ringkas
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
