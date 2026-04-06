

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(function (el) {
    revealObserver.observe(el);
});



const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
    let current = '';
    const scrollBottom = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollBottom >= pageHeight - 50) {
        current = sections[sections.length - 1].id;
    } else {
        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.id;
            }
        });
    }

    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent)';
        } else {
            link.style.color = '';
        }
    });
});



const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();


    submitBtn.textContent = 'Sent! ✓';
    submitBtn.style.background = '#3dff8f';
    submitBtn.style.pointerEvents = 'none';


    setTimeout(function () {
        submitBtn.textContent = 'Send Message →';
        submitBtn.style.background = '';
        submitBtn.style.pointerEvents = '';
        contactForm.reset();
    }, 3000);
});



const navEl = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navEl.style.boxShadow = '0 4px 40px rgba(0,0,0,0.6)';
    } else {
        navEl.style.boxShadow = 'none';
    }
});

const tracks = ['Starboy - The Weeknd', 'Blinding Lights - The Weeknd', 'Midnight City - M83', 'Save Your Tears - The Weeknd'];
let tIndex = 0;
const spTrack = document.getElementById('spTrack');
if (spTrack) {
    spTrack.style.transition = 'opacity 0.2s';
    setInterval(() => {
        tIndex = (tIndex + 1) % tracks.length;
        spTrack.style.opacity = '0';
        setTimeout(() => { 
            spTrack.textContent = tracks[tIndex];
            spTrack.style.opacity = '1'; 
        }, 200);
    }, 5000); 
}
