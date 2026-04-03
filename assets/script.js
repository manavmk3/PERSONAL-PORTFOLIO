
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

// Move dot instantly with mouse
document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

// Animate ring with smooth lag
function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

// Scale ring on hover over interactive elements
const interactiveEls = document.querySelectorAll(
    'a, button, .project-card, .skill-card, .stat-box'
);

interactiveEls.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
        ring.style.transform = 'translate(-50%, -50%) scale(1.8)';
        ring.style.borderColor = 'var(--accent2)';
    });
    el.addEventListener('mouseleave', function () {
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.borderColor = 'var(--accent)';
    });
});


/* ============ SCROLL REVEAL ============ */
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


/* ============ ACTIVE NAV HIGHLIGHT ============ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
        }
    });

    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent)';
        } else {
            link.style.color = '';
        }
    });
});


/* ============ CONTACT FORM ============ */
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Visual feedback
    submitBtn.textContent = 'Sent! ✓';
    submitBtn.style.background = '#3dff8f';
    submitBtn.style.pointerEvents = 'none';

    // Reset after 3 seconds
    setTimeout(function () {
        submitBtn.textContent = 'Send Message →';
        submitBtn.style.background = '';
        submitBtn.style.pointerEvents = '';
        contactForm.reset();
    }, 3000);
});


/* ============ NAV SCROLL SHADOW ============ */
const navEl = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navEl.style.boxShadow = '0 4px 40px rgba(0,0,0,0.6)';
    } else {
        navEl.style.boxShadow = 'none';
    }
});
