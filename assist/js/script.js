const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');
const nav = document.getElementById('main-nav');

// 1. Custom Cursor Movement
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    // Outline follows with a smooth animation
    outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// 2. Navbar Scroll Style
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. Magnetic Interaction for Buttons & Links
const magElements = document.querySelectorAll('.mag-btn, .mag-link');

magElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Move element slightly toward cursor
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        // Expand cursor outline
        outline.style.transform = `translate(-50%, -50%) scale(3)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
        outline.style.transform = `translate(-50%, -50%) scale(1)`;
    });
});

// 4. Bento Box 3D Parallax Effect
document.addEventListener('mousemove', (e) => {
    const boxes = document.querySelectorAll('.bento-box');
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    
    boxes.forEach(box => {
        box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});