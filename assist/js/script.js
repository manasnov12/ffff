const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

// Cursor Movement
document.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    
    outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 500, fill: "forwards" });
});

// Magnetic Elements
document.querySelectorAll('.mag-link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = `translate(0, 0)`;
    });
});

// Subscription Feedback
document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = 'Sent';
    setTimeout(() => btn.innerText = 'Subscribe', 2000);
});